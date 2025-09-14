import { BoardSpace } from '../types/game.ts';

export const boardSpaces: BoardSpace[] = [
  // Bottom row (right to left)
  { id: 0, name: 'Start', category: 'special', color: '#10B981', question: 'Welcome to Hackopoly!', answer: 'Begin your coding journey!' },
  { id: 1, name: 'Variables', category: 'basics', color: '#3B82F6', question: 'What is a variable in programming?', answer: 'A storage location with an associated name that contains data.' },
  { id: 2, name: 'Data Types', category: 'basics', color: '#3B82F6', question: 'Name three primitive data types.', answer: 'Integer, Boolean, String (examples may vary by language).' },
  { id: 3, name: 'Functions', category: 'basics', color: '#3B82F6', question: 'What is a function?', answer: 'A reusable block of code that performs a specific task.' },
  { id: 4, name: 'Arrays', category: 'data-structures', color: '#8B5CF6', question: 'What is an array?', answer: 'A collection of elements stored at contiguous memory locations.' },
  { id: 5, name: 'Loops', category: 'basics', color: '#3B82F6', question: 'What are the three main types of loops?', answer: 'For loop, While loop, Do-while loop.' },
  { id: 6, name: 'Conditionals', category: 'basics', color: '#3B82F6', question: 'What is an if-else statement?', answer: 'A control structure that executes code based on conditions.' },
  { id: 7, name: 'Objects', category: 'oop', color: '#F59E0B', question: 'What is an object in programming?', answer: 'An instance of a class containing data and methods.' },
  { id: 8, name: 'Classes', category: 'oop', color: '#F59E0B', question: 'What is a class?', answer: 'A blueprint or template for creating objects.' },
  { id: 9, name: 'Inheritance', category: 'oop', color: '#F59E0B', question: 'What is inheritance in OOP?', answer: 'A mechanism where a class acquires properties of another class.' },

  // Right side (bottom to top)
  { id: 10, name: 'Polymorphism', category: 'oop', color: '#F59E0B', question: 'What is polymorphism?', answer: 'The ability of objects to take multiple forms.' },
  { id: 11, name: 'Encapsulation', category: 'oop', color: '#F59E0B', question: 'What is encapsulation?', answer: 'Bundling data and methods together and restricting access.' },
  { id: 12, name: 'Linked Lists', category: 'data-structures', color: '#8B5CF6', question: 'What is a linked list?', answer: 'A linear data structure where elements point to the next element.' },
  { id: 13, name: 'Stacks', category: 'data-structures', color: '#8B5CF6', question: 'What is a stack?', answer: 'A LIFO (Last In, First Out) data structure.' },
  { id: 14, name: 'Queues', category: 'data-structures', color: '#8B5CF6', question: 'What is a queue?', answer: 'A FIFO (First In, First Out) data structure.' },
  { id: 15, name: 'Trees', category: 'data-structures', color: '#8B5CF6', question: 'What is a binary tree?', answer: 'A tree where each node has at most two children.' },
  { id: 16, name: 'Graphs', category: 'data-structures', color: '#8B5CF6', question: 'What is a graph?', answer: 'A collection of nodes connected by edges.' },
  { id: 17, name: 'Hash Tables', category: 'data-structures', color: '#8B5CF6', question: 'What is a hash table?', answer: 'A data structure that uses hash functions to map keys to values.' },
  { id: 18, name: 'Binary Search', category: 'algorithms', color: '#EF4444', question: 'How does binary search work?', answer: 'It repeatedly divides the search space in half.' },
  { id: 19, name: 'Sorting', category: 'algorithms', color: '#EF4444', question: 'Name a sorting algorithm with O(n log n) complexity.', answer: 'Merge Sort, Quick Sort, or Heap Sort.' },

  // Top side (right to left)
  { id: 20, name: 'Recursion', category: 'algorithms', color: '#EF4444', question: 'What is recursion?', answer: 'A function that calls itself to solve smaller subproblems.' },
  { id: 21, name: 'Dynamic Programming', category: 'algorithms', color: '#EF4444', question: 'What is dynamic programming?', answer: 'Breaking down problems into overlapping subproblems.' },
  { id: 22, name: 'Big O Notation', category: 'algorithms', color: '#EF4444', question: 'What does O(n) represent?', answer: 'Linear time complexity - time grows linearly with input size.' },
  { id: 23, name: 'HTML', category: 'web-dev', color: '#10B981', question: 'What does HTML stand for?', answer: 'HyperText Markup Language.' },
  { id: 24, name: 'CSS', category: 'web-dev', color: '#10B981', question: 'What is CSS used for?', answer: 'Styling and layout of web pages.' },
  { id: 25, name: 'JavaScript', category: 'web-dev', color: '#10B981', question: 'What type of language is JavaScript?', answer: 'A dynamic, interpreted programming language.' },
  { id: 26, name: 'React', category: 'web-dev', color: '#10B981', question: 'What is React?', answer: 'A JavaScript library for building user interfaces.' },
  { id: 27, name: 'APIs', category: 'web-dev', color: '#10B981', question: 'What is an API?', answer: 'Application Programming Interface - a set of protocols for building software.' },
  { id: 28, name: 'Databases', category: 'backend', color: '#F97316', question: 'What is a relational database?', answer: 'A database that stores data in tables with relationships.' },
  { id: 29, name: 'SQL', category: 'backend', color: '#F97316', question: 'What does SQL stand for?', answer: 'Structured Query Language.' },

  // Left side (top to bottom)
  { id: 30, name: 'NoSQL', category: 'backend', color: '#F97316', question: 'What is NoSQL?', answer: 'Non-relational databases that don\'t use tabular relations.' },
  { id: 31, name: 'Servers', category: 'backend', color: '#F97316', question: 'What is a web server?', answer: 'Software that serves web pages to clients over HTTP.' },
  { id: 32, name: 'RESTful APIs', category: 'backend', color: '#F97316', question: 'What is REST?', answer: 'Representational State Transfer - an architectural style for APIs.' },
  { id: 33, name: 'Version Control', category: 'tools', color: '#6366F1', question: 'What is Git?', answer: 'A distributed version control system for tracking code changes.' },
  { id: 34, name: 'Testing', category: 'tools', color: '#6366F1', question: 'What is unit testing?', answer: 'Testing individual components or modules in isolation.' },
  { id: 35, name: 'Debugging', category: 'tools', color: '#6366F1', question: 'What is a breakpoint?', answer: 'A pause point in code execution for debugging purposes.' },
  { id: 36, name: 'Algorithms', category: 'algorithms', color: '#EF4444', question: 'What is an algorithm?', answer: 'A step-by-step procedure for solving a problem.' },
  { id: 37, name: 'Data Structures', category: 'data-structures', color: '#8B5CF6', question: 'Why are data structures important?', answer: 'They organize data efficiently for different operations.' },
  { id: 38, name: 'Clean Code', category: 'best-practices', color: '#EC4899', question: 'What makes code "clean"?', answer: 'Readable, maintainable, and well-organized code.' },
  { id: 39, name: 'Documentation', category: 'best-practices', color: '#EC4899', question: 'Why is documentation important?', answer: 'It helps others understand and maintain your code.' }
];