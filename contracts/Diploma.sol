// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Diploma {
    struct Record {
        uint mineTime;
        uint blockNumber;
    }

    mapping(bytes32 => Record) private docHashes;

    constructor() {
    }

    function addDocHash(bytes32 hash) public {
        Record memory newRecord = Record(block.timestamp, block.number);
        docHashes[hash] = newRecord;
    }

    function findDocHash(bytes32 hash) public view returns (uint, uint) {
        return (docHashes[hash].mineTime, docHashes[hash].blockNumber);
    }
}