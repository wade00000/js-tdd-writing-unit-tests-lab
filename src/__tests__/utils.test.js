// Your tests here
import { isPalindrome } from "../utils"

describe("isPalindrome",()=>{
    it("accepts a string as an argument and returns true if the string is a palindrome, and false if it isn't",()=>{
        const word = "racecar"

        const string = isPalindrome("racecar")

        expect(string).toBe(true)
    })
})