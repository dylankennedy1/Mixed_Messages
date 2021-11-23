let str1 = ['My wife told me to stop impersonating ', 'a flamingo. ', 'I had to put my foot down. ']
let str2 = ['I went to buy some ', 'camo pants ', 'but couldn’t find any ']
let str3 = ['I failed math so many times ', 'at school, ', 'I can’t even count. ']

const mixedMessages = (str1, str2, str3) => {
    let i = Math.floor(Math.random() * 3)
    let j = Math.floor(Math.random() * 3)
    let k = Math.floor(Math.random() * 3)
    newMessage = str1[i] + str2[j] + str3[k]
    return newMessage
}
console.log(mixedMessages(str1, str2, str3))