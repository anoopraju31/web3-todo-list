// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title TodoList
 * @author Anoop Raju
 * @dev A simple todo list smart contract
 */
contract TodoList {
    struct Todo {
        string title;
        string description;
        uint createdTime;
        uint lastUpdated;
        uint targetTime;
        uint8 priority;
        bool status;
        bool isPresent;
    }

    mapping(address => Todo[]) private todos;
}
