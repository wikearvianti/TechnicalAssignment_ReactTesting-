import React, {useState} from 'React';
import './App.css';
import { AddTodo } from '../components/helper';
import {Add} from '../Math';
import { useState } from 'react';
import TodoList from './components/TodoList';

test('Should add todo to the list', () => {
  // Arrange
  const newTodo =[ {
    id: 1,
    name: 'Learn JSX',
    isComplete: false,
  },
  {
    id: 2,
    name: 'Build awesome react app',
    isComplete: false,
  },
  {
    id: 3,
    name: 'Ship it',
    isComplete: false,
  },
  ];
  const experied = [newTodoList, ...defaultToDo]
  const expectedTrue = JSON.stringify(experied)
  // Act
  const list = AddTodo (defaultToDo, newTodoList)
  const result = JSON.stringify(list)
  // Assert
  expectedTrue(result).toBe(expectedTrue)
})
test('should not mutate the existing todo array', () => {
  // Arrange
  const Todo =[ {
    id: 1,
    name: 'Learn JSX',
    isComplete: false,
  },
  {
    id: 2,
    name: 'Build awesome react app',
    isComplete: false,
  },
  {
    id: 3,
    name: 'Ship it',
    isComplete: false,
  },
  ];
  const nilai ={
    id: 4,
    name: 'Learn JSX',
    isComplete: false,
  }
  const resultToDo =[{
    id: 1,
    name: 'Learn JSX',
    isComplete: false,
  },
  {
    id: 2,
    name: 'Build awesome react app',
    isComplete: false,
  },
  }],
  // Act
  AddTodo(defaultToDo, newTodoList)
  const actualToDo = defaultToDo
  const nextToDo = JSON.stringify(expectedTtrue)===JSON.stringify(actualToDo)
  // Assert
  expected(true).toBe(nextToDo)
});