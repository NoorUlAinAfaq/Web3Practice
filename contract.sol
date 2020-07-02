pragma solidity 0.6.0;

contract getDouble
{
    uint256 dbl;
    event logString(string);
    
    function double(uint256 number) public
    {
        dbl = number*2;
    }
    function getdouble() public returns(uint256)
    {
       
        emit logString("doubled");
    
         return dbl;
    }

}
