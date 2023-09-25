# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:
# method name: number_tester
# input: numerical value
# output: string that says if the number is even or odd
# process: modulo operator to determine if rermainder of number divided by 2 is 0 indicating if it is an even number, string interpolation to return result

# def number_tester(number)
#     if number % 2 == 0
#         return p "#{number} is even"
#     else
#         return p "#{number} is odd"
#     end
# end

# number_tester(reposts1)
# number_tester(reposts2)
# number_tester(reposts3)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:
# method name: vowel_remover
# input: string
# output: same string with vowels removed
# method: Ruby .delete method to remove unwanted characters from string

def vowel_remover(string)
    string.delete 'aeiouAEIOU'
end 
p vowel_remover(beatles_album1)
p vowel_remover(beatles_album2)
p vowel_remover(beatles_album3)

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code:
# method name: palindrome
# input: string
# output: string indicating whether the input string is or isn't a palindrome
# process: .reverse and .downcase methods to compare the string forward and backward, string interpolation to return sentence indicating whether the string is a palindrome


def palindrome string
    if string.downcase == string.downcase.reverse
        "#{string} is a palidrome"
    else 
       "#{string} ain't a palindrome"
    end
end
p palindrome(palindrome_test_case1)
p palindrome(palindrome_test_case2)
p palindrome(palindrome_test_case3)