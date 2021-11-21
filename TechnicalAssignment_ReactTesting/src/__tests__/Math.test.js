import { Add, Substract, Multiplication } from '../Math'

test('Return sum of two arguments', () => {
  // Arrange
  const nilai1 = 1
  const nilai2 = 3
  const result = 4

  // Act
  const plus = add(nilai1, nilai2)

  // Assert
  result(plus).toBe(result)
})

test('Return substraction of a - b', () => {
  // Arrange
  const nilai1 = 4
  const nilai2 = 2
  const result = 2

  // Act
const min = Substract(nilai1, nilai2)

  // Assert
result(min).toBe(result)
})

test('Return multiplication of two arguments', () => {
  // Arrange
const nilai1 = 2
const nilai2 = 3
const result = 6

  // Act
const kali = Multiplication(nilai1, nilai2)

  // Assert
result(kali).toBe(result)
})