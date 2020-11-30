---
title: python-scripts
description: ''
keywords: 
---

&nbsp;

Next hello world  
Github - [0000-task.py](https://github.com/jakubgania/python-scripts/blob/master/0000-task.py)

```python
print("hello world")
```
&nbsp;

Retrieving and displaying messages  
Github - [0001-task.py](https://github.com/jakubgania/python-scripts/blob/master/0001-task.py)

```python
message = input("Type a message : ")

print("Your message : ", message)
```
&nbsp;

Text formatting  
Github - [0002-task.py](https://github.com/jakubgania/python-scripts/blob/master/0002-task.py)

```python
# \\ - displaying a left slash
print("example \\ message")

# \' - displaying sigle quotation marks
print("example \' message \'")

# \a - generates a syste bell
print("\a")

# \n - moves the cursor to a new line
print("example \n message")

# \t - displaying tab
print("example \t message")
```
&nbsp;

Example of text concatenation  
Github - [0003-task.py](https://github.com/jakubgania/python-scripts/blob/master/0003-task.py)

```python
# concatenation
print("example" + " " + "message" + " " + "datetime" + ":" + " " + "17:12" + " " + "-" + " " + "18/08/2019")
```
&nbsp;

Example of text multiplication  
Github - [0004-task.py](https://github.com/jakubgania/python-scripts/blob/master/0004-task.py)

```python
# text multiplication
print("example " * 4)
```
&nbsp;

Example of mathematical operations  
Github - [0005-task.py](https://github.com/jakubgania/python-scripts/blob/master/0005-task.py)

```python
# mathematical operations

# addition
print(8000 + 2000)

# subtraction
print(8000 - 2000)

# multiplication
print(8000 * 2)

# division
print(8000 / 2000)

# total division
print(107 // 4)

# modulo
print(107 % 4)
```
&nbsp;

Example of using ready-made functions for text formatting  
Github - [0006-task.py](https://github.com/jakubgania/python-scripts/blob/master/0006-task.py)

```python
name = input("what's your name ? ")

print("Hello ", name)

print("Hello ", name.upper())
print("Hello ", name.lower())
print("Hello ", name.swapcase())
print("Hello ", name.capitalize())
print("Hello ", name.title())

example = "    Hello - example message    "

print(example.strip())

text = "Hello for everyone"

print(text.replace("Hello ", "Hi "))
```
&nbsp;

Program counting prices of computer components  
Github - [0007-task.py](https://github.com/jakubgania/python-scripts/blob/master/0007-task.py)

```python
# program counting prices of computer components

priceOfProcessor = float(input("enter price of processor : "))
priceOfMotherboard = float(input("enter price of motherboard : "))
priceOfGraphicsCard = float(input("enter price of graphics card : "))
priceOfRAM = float(input("enter price of RAM : "))
priceOfSSD = float(input("enter price of SSD : "))
priceOfPowerSupply = float(input("enter price of power supply : "))
priceOfCooling = float(input("enter prcie of cooling : "))
priceOfComputerCase = float(input("enter prcie of computer case : "))

priceOfAllComponents = priceOfProcessor + priceOfMotherboard + priceOfGraphicsCard + priceOfRAM + priceOfSSD + priceOfPowerSupply + priceOfCooling + priceOfComputerCase

print("Price of all components : ", priceOfAllComponents)
```
&nbsp;

Example of extended assignment operators  
Github - [0008-task.py](https://github.com/jakubgania/python-scripts/blob/master/0008-task.py)

```python
# extended assignment operators 

number = int(input("Enter number : "))
ratio = int(input("Enter ratio : "))

number1 = number
number1 *= ratio
print(str(number) + " *= " + str(ratio) + " = ", number1)

number2 = number
number2 /= ratio
print(str(number) + " /= " + str(ratio) + " = ", number2)

number3 = number
number3 %= ratio
print(str(number) + " %= " + str(ratio) + " = ", number3)

number4 = number
number4 += ratio
print(str(number) + " += " + str(ratio) + " = ", number4)

number5 = number
number5 -= ratio
print(str(number) + " -= " + str(ratio) + " = ", number5)

number6 = number
number6 *= ratio
print(str(number) + " *= " + str(ratio) + " = ", number6)
```
&nbsp;

Example of using pseudo-random assignment operations  
Github - [0009-task.py](https://github.com/jakubgania/python-scripts/blob/master/0009-task.py)

```python
import random

number = random.randint(1, 10)

print("number drawn : ", number)
```

Example of using the if statement  
Github - [0010-task.py](https://github.com/jakubgania/python-scripts/blob/master/0010-task.py)

```python
password = input("Type password : ")

if password == "secret":
    print("access granted")
```
&nbsp;

Example of different conditional statements using the if statement  
Github - [0011-task.py](https://github.com/jakubgania/python-scripts/blob/master/0011-task.py)

```python
number1 = int(input("type number 1 : "))
number2 = int(input("type number 2 : "))

if number1 == number2:
    print("number " + str(number1) + " is equal to " + str(number2))

if number1 != number2:
    print("number " + str(number1) + " does not equal " + str(number2))

if number1 > number2:
    print("number " + str(number1) + " bigger than " + str(number2))

if number1 < number2:
    print("number " + str(number1) + " smaller than " + str(number2))

if number1 >= number2:
    print("number " + str(number1) + " greater or equal " + str(number2))

if number1 <= number2:
    print("number " + str(number1) + " less than or equal " + str(number2))
```
&nbsp;

Example of if else statement  
Github - [0012-task.py](https://github.com/jakubgania/python-scripts/blob/master/0012-task.py)

```python
inputNumber = int(input("type number : "))

if (inputNumber % 2) == 0:
    print("input number is even")
else:
    print("input number is odd") 
```
&nbsp;

Determining the first n elements of the sequence of prime numbers  
Github - [0013-task.py](https://github.com/jakubgania/python-scripts/blob/master/0013-task.py)

```python
numberOfNumbersToGenerate = int(input("type a number of numbers to generate : "))

p = 2
d = 2

for counter2 in range(numberOfNumbersToGenerate):
    for counter in range(d, p - 1):
        if (p % d) == 0:
            p = p + 1
            d = 2
            counter = 0
        else:
            d = d + 1

    print(counter2 + 1, p)

    p = p + 1
    d = 2
```
&nbsp;

Determination of the first n elements of the fibonacci sequence  
Github - [0014-task.py](https://github.com/jakubgania/python-scripts/blob/master/0014-task.py)

```python
numberOfElements = int(input("type number of elements : "))

f_0 = 0
f_1 = 1

for counter in range(0, numberOfElements):
      if counter > 1:
            f_i = f_0 + f_1
            print(counter + 1, f_i)

            f_0 = f_1
            f_1 = f_i
      else:
            print(counter + 1, f_0 + counter)
```