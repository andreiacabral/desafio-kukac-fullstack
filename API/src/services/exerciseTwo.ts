

export const minimumMoneyBillChange = (purchaseValue : number, givenValue: number): any =>  {

    let amountOfBills=0
    let change
    change = givenValue - purchaseValue
    let totalChange = change
    let amountOfOneBills=0
    let amountOfTenBills=0
    let amountOfHundredBills =0

while(change>99){
  change-=100
  amountOfHundredBills +=1
}
   
while(change>9){
  change-=10
  amountOfTenBills +=1
}

while(change>0){
  change-=1
  amountOfOneBills +=1
}

    amountOfBills = amountOfHundredBills+amountOfTenBills+amountOfOneBills

    return {amountOfBills,purchaseValue,totalChange,amountOfHundredBills,amountOfTenBills,amountOfOneBills}
} 

