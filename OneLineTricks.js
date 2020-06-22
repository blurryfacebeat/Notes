// Если нет переменной someNum, то const x = 5;
const x = someNum || 5;

// Если переменная someNum есть, то использовать 5;
const x = someNum && 5;

// Тернарный оператор, если есть someNum, то использовать 5, иначе 3
const x = someNum ? 5 : 3;
