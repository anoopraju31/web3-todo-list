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

    event TodoCreate(address _owner, uint _id);
    event TitleUpdate(address _owner, uint _id);
    event DescriptionUpdate(address _owner, uint _id);
    event TargetTimeUpdate(address _owner, uint _id);

    /**
     * @dev Modifier to check weather it is valid todo id oor not.
     * @param _id Id of a todo of the sender.
     */
    modifier validTodoId(uint _id) {
        require(todos[msg.sender][_id].isPresent == true, "Invalid Todo Id");
        _;
    }

    /**
     * @dev create a new todo
     * @param _title The title for the todo.
     * @param _description The description about the todo.
     * @param _targetTime The target time for the todo.
     * @param _priority The priority for the todo.
     */

    function createTodo(
        string memory _title,
        string memory _description,
        uint _targetTime,
        uint8 _priority
    ) public {
        Todo memory todo;

        todo.title = _title;
        todo.description = _description;
        todo.createdTime = block.timestamp;
        todo.lastUpdated = block.timestamp;
        todo.targetTime = _targetTime;
        todo.priority = _priority;
        todo.isPresent = true;

        todos[msg.sender].push(todo);

        emit TodoCreate(msg.sender, todos[msg.sender].length);
    }

    /**
     * @dev Get the todos of the user.
     * @return Todo[] The list of todos of the sender.
     */

    function getTodos() public view returns (Todo[] memory) {
        return todos[msg.sender];
    }

    /**
     * @dev Get the count of todos of the user.
     * @return count The count of todos of the sender.
     */

    function getTodosCount() public view returns (uint) {
        return todos[msg.sender].length;
    }

    /**
     * @dev Update the title of a todo.
     * @param _id The id of the todo.
     * @param _title The new title of the todo.
     */

    function updateTitle(
        uint _id,
        string memory _title
    ) public validTodoId(_id) {
        todos[msg.sender][_id].title = _title;
        todos[msg.sender][_id].lastUpdated = block.timestamp;

        emit TitleUpdate(msg.sender, _id);
    }

    /**
     * @dev Update the description of a todo.
     * @param _id The id of the todo.
     * @param _description The new description of the todo.
     */
    function updateDescription(
        uint _id,
        string memory _description
    ) public validTodoId(_id) {
        todos[msg.sender][_id].description = _description;
        todos[msg.sender][_id].lastUpdated = block.timestamp;

        emit DescriptionUpdate(msg.sender, _id);
    }

    /**
     * @dev Update the target time of a todo.
     * @param _id The id of the todo.
     * @param _targetTime The new target time of the todo.
     */
    function updateTargetTime(
        uint _id,
        uint _targetTime
    ) public validTodoId(_id) {
        todos[msg.sender][_id].targetTime = _targetTime;
        todos[msg.sender][_id].lastUpdated = block.timestamp;

        emit TargetTimeUpdate(msg.sender, _id);
    }
}
