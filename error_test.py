# Attribute Error
harrisons_shoes = {"Nike Air Force 1 07", "Nike Air Max Plus", "Adidas Gazelle"}
shoe_emporium = {"Adidas Samba", "Adidas Superstar", "Nike Air Max Plus"}
harrisons_shoes.extend(shoe_emporium)
print(harrisons_shoes)

# Value Error
import math
print(math.sqrt(-1))

#Zero Division Error
a = 8
b = 0
c = a / b
print (c)

#Assertion Error
assert True == False, "Whoops, something went wrong!"
print(True)

#Import Error
import something

#Index Error
myList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print("The list is:", myList)
index = 10
element = myList[index]
print("Element at index {} is {}".format(index,element))

#Key error
ages = {'Jim': 30, 'Pam': 28, 'Kevin': 33}
ages['Michael']

#System Exit
raise SystemExit('Unable to open')

#Overflow Error
j = 5.0

for i in range(1, 1000):
    j = j**i
    print(j)

# Recursion Error
def factorial(n):
    if n == 0:
        return 1
    else:
        return n*factorial(n-1) 

print(factorial(100000))