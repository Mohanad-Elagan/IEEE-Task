l = input("Enter a word to check: ")
reverse = l[::-1]
if(l == reverse):
    print("True! It's a plindrome")
else:
    print("Wrong! It's not a plindrome")