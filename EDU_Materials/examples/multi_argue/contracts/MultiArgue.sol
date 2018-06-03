pragma solidity ^0.4.23;

library SafeMath {
  function mul(uint256 a, uint256 b) internal pure returns (uint256) {
    if (a == 0) {
      return 0;
    }
    uint256 c = a * b;
    assert(c / a == b);
    return c;
  }

  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    // assert(b > 0); // Solidity automatically throws when dividing by 0
    uint256 c = a / b;
    assert(a == b * c + a % b); // There is no case in which this doesn't hold
    return c;
  }

  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b <= a);
    return a - b;
  }

  function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }
}

contract IMultiArgue {
    function createArgueVote(uint256 _endTime, uint8 _argueType, address _argueContract) public returns(uint256);
    function approvedAddress(uint256 _argueNum, address _approvedAddress) public returns(bool);
    function setInvestSum(uint256 _argueNum, address _sender, uint256 _investSum) public returns(bool);
    function vote(uint256 _argueNum, uint8 _vote) public returns(bool);
    function getVote(uint256 _argueNum, address _voter) public view returns(uint8);
    function getGain(uint256 _argueNum) public view returns(uint256);
    function setWinners(uint256 _argueNum, uint8 _winner) public returns(bool);
    function releaseInterest(uint256 _argueNum, uint256 _value) public returns(bool);
    
    event CreateArgueVote(uint256 indexed argueNum, address indexed creater);
    event ApproveAddress(uint256 indexed argueNum, address indexed approvedAddress);
    event Vote(uint256 indexed argueNum, address indexed voter, uint8 indexed vote);
    event SetWinners(uint256 indexed argueNum, uint8 indexed winner);
    event ReleaseInterest(uint256 indexed argueNum, address indexed reciever, uint256 indexed value);
}

contract ISimpleArgue {
    function setArgueNum(uint256 _argueNum) public returns(bool);
    function setWinners(uint8 _winner) public returns(bool);
    function pay(address _reciever, uint256 _value) public returns(bool);
}

contract MultiArgue is IMultiArgue {
    using SafeMath for uint256;
    
    uint256 argueCount;
    uint8 constant NO_VOTE = 0;
    uint8 constant VOTE_NO = 1;
    uint8 constant VOTE_YES = 2;
    
    mapping (uint256 => uint256) startTime;
    mapping (uint256 => uint256) endTime;
    mapping (uint256 => uint8) argueType;
    mapping (uint256 => address) argueContract;
    mapping (uint256 => address) argueOwner;
    
    mapping (uint256 => mapping (address => bool)) public approvedAddress;
    mapping (uint256 => mapping (address => uint8)) public votes;
    mapping (uint256 => uint8) public voteWin;
    
    mapping (uint256 => uint256) totalInvestSumNo;
    mapping (uint256 => uint256) totalInvestSumYes;
    mapping (uint256 => mapping (address => uint256)) public investSum;
    mapping (uint256 => mapping (address => uint256)) releasedSum;
    
    function createArgueVote(uint256 _endTime, uint8 _argueType, address _argueContract) public returns(uint256) {
        uint256 currenctArgue = argueCount.add(1);
        startTime[currenctArgue] = now;
        endTime[currenctArgue] = _endTime;
        argueContract[currenctArgue] = _argueContract;
        address owner = msg.sender;
        argueOwner[currenctArgue] = owner;
        argueType[currenctArgue] = _argueType;
        argueCount = currenctArgue;
        ISimpleArgue simpleArgue_contract = ISimpleArgue(_argueContract);
        simpleArgue_contract.setArgueNum(currenctArgue);
        emit CreateArgueVote(currenctArgue, owner);
        return currenctArgue;
    }
    
    function approvedAddress(uint256 _argueNum, address _approvedAddress) public returns(bool) {
        require(msg.sender == argueOwner[_argueNum]);
        approvedAddress[_argueNum][_approvedAddress] = true;
        emit ApproveAddress(_argueNum, _approvedAddress);
        return true;
    }
    
    function setInvestSum(uint256 _argueNum, address _sender, uint256 _investSum) public returns(bool) {
        require(msg.sender == argueContract[_argueNum]);
        investSum[_argueNum][_sender] = investSum[_argueNum][_sender].add(_investSum);
        return true;
    }
    
    function vote(uint256 _argueNum, uint8 _vote) public returns(bool) {
        require(now < endTime[_argueNum]);
        if (argueType[_argueNum] == 1) {
            require(approvedAddress[_argueNum][msg.sender] == true);
        }
        require(votes[_argueNum][msg.sender] == NO_VOTE);
        require(_vote == VOTE_YES || _vote == VOTE_NO);
        uint256 _investSum = investSum[_argueNum][msg.sender];
        require(_investSum > 0);
        if (_vote == VOTE_NO) {
            totalInvestSumNo[_argueNum] = totalInvestSumNo[_argueNum].add(_investSum);
        } else {
            totalInvestSumYes[_argueNum] = totalInvestSumYes[_argueNum].add(_investSum);
        }
        votes[_argueNum][msg.sender] = _vote;
        emit Vote(_argueNum, msg.sender, _vote);
        return true;
    }
    
    function getVote(uint256 _argueNum, address _voter) public view returns(uint8) {
        require(msg.sender == argueContract[_argueNum]);
        return votes[_argueNum][_voter];
    }
    
    function getGain_(uint256 _argueNum, address _reciever) internal view returns(uint256) {
        require(votes[_argueNum][msg.sender] == voteWin[_argueNum]);
        if (voteWin[_argueNum] == VOTE_NO) {
            return investSum[_argueNum][_reciever].mul(totalInvestSumNo[_argueNum].add(totalInvestSumYes[_argueNum])).div(totalInvestSumNo[_argueNum]).sub(releasedSum[_argueNum][_reciever]);
        } else {
            return investSum[_argueNum][_reciever].mul(totalInvestSumNo[_argueNum].add(totalInvestSumYes[_argueNum])).div(totalInvestSumYes[_argueNum]).sub(releasedSum[_argueNum][_reciever]);
        }
    }
    
    function getGain(uint256 _argueNum) public view returns(uint256) {
        require(now > endTime[_argueNum]);
        return getGain_(_argueNum, msg.sender);
    }
    
    function setWinners(uint256 _argueNum, uint8 _winner) public returns(bool) {
        require(now > endTime[_argueNum]);
        require(msg.sender == argueContract[_argueNum]);
        voteWin[_argueNum] = _winner;
        emit SetWinners(_argueNum, _winner);
        return true;
    }
    
    function releaseInterest(uint256 _argueNum, uint256 _value) public returns(bool) {
        require(now >= endTime[_argueNum]);
        require(votes[_argueNum][msg.sender] == voteWin[_argueNum]);
        require(getGain_(_argueNum, msg.sender) > 0);
        ISimpleArgue simpleArgue_contract = ISimpleArgue(argueContract[_argueNum]);
        simpleArgue_contract.pay(msg.sender, _value);
        releasedSum[_argueNum][msg.sender] = releasedSum[_argueNum][msg.sender].add(_value);
        emit ReleaseInterest(_argueNum, msg.sender, _value);
        return true;  
    }
}