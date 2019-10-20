const socket = io()

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('canvas#camera')
    const ctx = canvas.getContext('2d')
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { exact: "environment" } }, audio: false })
    
})