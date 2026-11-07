import {defineStore} from 'pinia'
import {ref,computed} from 'vue'
import bookingData from '../jsons/data.json'

export const useUserStore = defineStore('bookingData',()=>{
    const username = ref(bookingData.guestName);
    const checkIn = ref(bookingData.checkIn);
    const checkOut = ref(bookingData.checkOut);
    const totalPrice = ref(bookingData.totalPrice);
    const room = ref(bookingData.room);

    function login(name:string){
        username.value = name;
    }
    return {username,checkIn,checkOut,totalPrice,room,login}
})