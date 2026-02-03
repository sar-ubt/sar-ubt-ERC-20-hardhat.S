//SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    constructor(address owner)
        ERC20("MyToken", "STK")
        Ownable(owner)
    {
        _mint(owner, 1_000_000 ether);
    }

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}