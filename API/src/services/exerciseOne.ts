export const palindromesFromRange = (from : number,to: number): number[] => {

    const returnList: number[] = []

    for (var i = from; i <=to; i++) {
        if(isPalindrome(i))
        returnList.push(i)
       }

    return returnList;
} 

function isPalindrome(n: number) {
    var rev = 0
    for (var i = n; Math.trunc(i) > 0; i /= 10) {
        rev = ((rev*10) + (Math.trunc(i)%10))
        }
    return (n==rev)
}
    