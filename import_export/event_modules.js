const EventEmitter=require('events');
const emitter=new EventEmitter();

emitter.on("greet",(username)=>{
    console.log(`hello , ${username}`);
});
emitter.emit("greet", " surabhi MR ");