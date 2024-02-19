// Declared Variables
const seats = document.getElementsByClassName("seat");
const availableSeats = document.getElementById("availableSeats")
const selectedSeats = document.getElementById("selectedSeats")
const seatPurchaseList = document.getElementById("seatPurchaseList")
const totalSeatsPrice = document.getElementById("totalSeatsPrice")
const grandTotalSeatsPrice = document.getElementById("grandTotalSeatsPrice")
const couponField = document.getElementById("couponField")
const couponApplyBtn = document.getElementById("couponApplyBtn")
const passengerName = document.getElementById("passengerName")
const passengerPhn = document.getElementById("passengerPhn")
const passengerEmail = document.getElementById("passengerEmail")
const passengerInfoSubmitBtn = document.getElementById("passengerInfoSubmitBtn")
let totalSeatCount = 40
let selectedSeatCount = 0
availableSeats.innerText = totalSeatCount
selectedSeats.innerText = selectedSeatCount
for(let seat of seats){
    seat.addEventListener("click",seatOperations)
    function seatOperations(){
        seat.classList.toggle("bg-green-500")
        let hasClass = seat.classList.contains('bg-green-500')
        if(hasClass){
            totalSeatCount--
            selectedSeatCount++
            purchaseSeats(seat.innerText)
        }else{
            totalSeatCount++
            selectedSeatCount--
            document.getElementById(`seatId_${seat.innerText}`).remove()
        }
        availableSeats.innerText = totalSeatCount
        selectedSeats.innerText = selectedSeatCount
        let totalPrice = selectedSeatCount * 550
        totalSeatsPrice.innerHTML = totalPrice
        grandTotalSeatsPrice.innerHTML = totalPrice
    }
}
function purchaseSeats(seatName){
    const li =  `<li id="seatId_${seatName}" class="flex justify-between text-sm pb-4 text-gray-400">
                            <p>${seatName}</p>
                            <p class="ml-12" >Economy</p>
                            <p>550</p>
                        </li>`
seatPurchaseList.innerHTML += li
}
// Coupon features
couponApplyBtn.addEventListener("click",couponFunc)

function couponFunc(){
    console.log(selectedSeats.innerText);
    if(selectedSeats.innerText >= 4){
    const coupons = ["NEW 15","Couple 20"]
    const userInputedCoupon = couponField.value
    if(coupons[0] == userInputedCoupon){
        grandTotalSeatsPrice.innerHTML = parseInt(Number(totalSeatsPrice.innerHTML) - (Number(totalSeatsPrice.innerHTML / 100) * 15))
    }else if(coupons[1] == userInputedCoupon){
        grandTotalSeatsPrice.innerHTML = parseInt(Number(totalSeatsPrice.innerHTML) - (Number(totalSeatsPrice.innerHTML / 100) * 20))
    }
}else{
    return confirm("You are purchased  " + selectedSeats.innerText + " seats. To use coupon minimum purchase 4 tickets.")
}
}
// passenger form validation
    passengerInfoSubmitBtn.addEventListener("click",() => {
        if(!(passengerName.value == "") && !(passengerPhn.value == "") && !(passengerEmail.value == "")){
            this.my_modal.showModal()
        }else{
            document.getElementById("emptyFieldError").innerText =" Your Input fields are empty! Please fill then submit."
        }
    })