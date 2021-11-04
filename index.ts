const TelegramApi = require('node-telegram-bot-api')
const axios = require('axios')



const token = '2029287296:AAHuIWYmPbZ7NjOM2xrUi6nucFOgeDcP6gA'

const companyId = '78d9026f-f9a4-4409-b2cd-ba9e5b8e05a7'


const token1 = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJyZ1FRTTlVc1I1bWU1b09KeW5fU2JKM01qUDVtYUxKMkFyaURrZmlLZndrIn0.eyJleHAiOjE2MzYwODQ2MjUsImlhdCI6MTYzNjA0ODYyNSwiYXV0aF90aW1lIjowLCJqdGkiOiJmOTFlYmY1MC1mODk1LTRlMWUtYTMyMS1lYWRjZWNmZmQxOTUiLCJpc3MiOiJodHRwczovL3Rlc3Qtc3NvLmJuZWN0LnByby9hdXRoL3JlYWxtcy9ibmVjdCIsImF1ZCI6ImJuZWN0LXRlc3QiLCJzdWIiOiIwODQ0NmVkNS03MzcwLTQ3ZjYtOTViYS1jNzRiYmUwMmEwNDMiLCJ0eXAiOiJJRCIsImF6cCI6ImJuZWN0LXRlc3QiLCJzZXNzaW9uX3N0YXRlIjoiYTdjMzNmMmEtZjdlOS00NmFmLThiYTAtZDY4YWY5YzU1NDM5IiwiYXRfaGFzaCI6Ink1WVNyVWwtNmtYWmZ3aE42c3E4SFEiLCJhY3IiOiIxIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InR0Mjc3ODYwMkBnbWFpbC5jb20iLCJlbWFpbCI6InR0Mjc3ODYwMkBnbWFpbC5jb20ifQ.Gsc4XuzlBH8SLtM-_ZeBh9CMRQ-VQ2fH9mDGnjtwrJq0PXU_CxdnYSFX-proCCEKOl8f50wl6xHyqrctgU-s7Ohmvnpra1WZQbo0RG0fjlZoeLmWBXRp0Baue4gJT0SR4NXGSGV9mi4XnCQ9iq7U8LjEl_fQpd6B3f0wZdtpwBgUiUL6whoZqwTfMByD1CZacGHIZ8kmtsOKmpZItD6V5bCp9OxwOpeN8UKsumxkqwTLoKmYlpJLCXPdpRk_Kz-_fRdJJMQE4vsEOJY7eZyXnYBpBY_uubvoRR4dSIPVAzaoDnXDMaPD-7KTuy-UOw9p5nX5gxYSzHncwulwz6zHIQ'


const instance = (authorization = true) => {
  const axiosInstance = axios.create({
    baseURL: 'https://test.bnect.pro/api'
  });

  if (authorization) {
    axiosInstance.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${token1}`;
        return config;
      },
      (error) => Promise.reject(error)
    );
  }
  return axiosInstance;
};


let InitForm = {
  typeId: 10,
  CategoryId: '',
  KindId: '',
  isEmergency: false,
  Description: '',
  CompanyId: companyId,
  PropertyId: '',
  PropertyRoomId: '',
  files: ''
}


let formApplication = {
  typeId: 10,
  CategoryId: '',
  KindId: '',
  isEmergency: false,
  Description: '',
  CompanyId: companyId,
  PropertyId: '',
  PropertyRoomId: '',
  files: ''
}
let properties = []


const bot = new TelegramApi(token, {polling: true})

let option = {}

const creatorOptions = (array, chatId, title) => {

  option = {
    reply_markup: JSON.stringify({
      inline_keyboard: array
    })
  }

  return bot.sendMessage(chatId, title, option)
}


bot.on('document', (ctx) => {

  const {file_id: fileId} = ctx.document;
  const fileUrl = bot.getFileLink(fileId);
  const response = axios.get(fileUrl);

  console.log(response)



  // function dataURLtoFile(dataurl, filename) {
  //
  //   var arr = dataurl.split(','),
  //     mime = arr[0].match(/:(.*?);/)[1],
  //     bstr = atob(arr[1]),
  //     n = bstr.length,
  //     u8arr = new Uint8Array(n);
  //
  //   while(n--){
  //     u8arr[n] = bstr.charCodeAt(n);
  //   }
  //
  //   return new File([u8arr], filename, {type:mime});
  // }
  //
  // //Usage example:
  // var file = dataURLtoFile(response.data,'hello.png');
  // console.log(file);


  // const blob = new Blob(response.data)
  //
  // console.log(blob)

 // response.data.blob().then(res=>console.log(res))

  // console.log(new Blob([response.data], {
  //   type: 'application/pdf'
  // }))


//   const options = {
//     headers: {
//       Authorization: `Bearer ${token1}`
//     }
//   }
//
// fetch(fileUrl,options)

  // function toArrayBuffer(buf) {
  //   var ab = new ArrayBuffer(buf.length);
  //   var view = new Uint8Array(ab);
  //   for (var i = 0; i < buf.length; ++i) {
  //     view[i] = buf[i];
  //   }
  //   return ab;
  // }
  //
  // let buffer = Buffer.from(toArrayBuffer(response.data));
  // let arraybuffer = Uint8Array.from(buffer).buffer;
  //
  // console.log(arraybuffer)


  // const url = 'data:image/png;base6....';


// const blobToFile = (theBlob: Blob, fileName:string): File => {
//   let b: any = theBlob;
//   //A Blob() is almost a File() - it's just missing the two properties below which we will add
//   b.lastModifiedDate = new Date();
//   b.name = fileName;
//
//   //Cast to a File() type
//   return <File>theBlob;
//   //
//   // let file = new Blob([arraybuffer], {type: 'application/pdf'})
// }
//
//   var myBlob = new Blob();
//
// //do stuff here to give the blob some data...
//
//   var myFile = blobToFile(myBlob, "my-image.png");
//
//   console.log(myFile)


  // .then(blob=>{
  //   let file = window.URL.createObjectURL(blob)
  //   window.location.assign(file)
  // })



  // let file = response.data
  // formData.append('files',file);
  // console.log(file)

  // ctx.reply('I read the file for you! The contents were:\n\n' + response.data);
});


const idMessages = []

bot.on('message', (msg) => {
  const text = msg.text
  const chatId = msg.chat.id

  console.log(msg)

  idMessages.push(msg.message_id)

  if (text === '/start') {
    bot.sendMessage(chatId, 'Создание сервисной заявки')
    let buttons = []
    instance().get(`/property/announcement/list?CompanyId=${companyId}`)
      .then(res => {
        properties = res.data.result
        buttons = res.data.result.map(el => ([{text: el.property.name, callback_data: el.property.id}]))
        creatorOptions(buttons, chatId, 'выберите здание')
      })
      .catch(err => console.log(err))
  } else {
    formApplication.Description = msg.text
    // console.log(formApplication)

    const endButton = [[{text: 'Создать', callback_data: 'true'}], [{text: 'Отмена', callback_data: 'false'}]]

    creatorOptions(endButton, chatId, 'Создать заявку?')
  }


})

bot.on('callback_query', (msg) => {

  console.log(msg)

  idMessages.push(msg.message.message_id)

  if (msg.message.text === 'выберите помещение') {
    formApplication.PropertyRoomId = msg.data
  } else if (msg.message.text === 'выберите здание') {
    formApplication.PropertyId = msg.data
  } else if (msg.message.text === 'выберите вид работ') {
    formApplication.KindId = msg.data
  } else if (msg.message.text === 'выберите категорию работ') {
    formApplication.CategoryId = msg.data
  } else if (msg.message.text === 'Заявка аварийная?') {
    formApplication.isEmergency = msg.data === 'true'
  }

  if (msg.message.text === 'Создать заявку?') {
    if(msg.data === 'ture') {
      instance().post(`/Property/Request`, formApplication).then(() => {
        bot.sendMessage(msg.message.chat.id, 'Заявка успешно создана')
      })
        .catch(() => {
          bot.sendMessage(msg.message.chat.id, 'Заявка не создана')
        })
    }
    idMessages.forEach(message=>{
    bot.deleteMessage(msg.message.chat.id, message)
    })
    bot.sendMessage(msg.message.chat.id, 'Создание заявки отменено')
    formApplication = InitForm
  }


  if (msg.message.text === 'выберите здание') {
    propertyRoom(formApplication.PropertyId, msg.message.chat.id)
  } else if (msg.message.text === 'выберите помещение') {
    let buttons = []
    instance().get('/References/PropertyRequestKind/List')
      .then(res => {
        buttons = res.data.result.map(el => ([{text: el.name, callback_data: el.id}]))
        creatorOptions(buttons, msg.message.chat.id, 'выберите вид работ')
      })

  } else if (msg.message.text === 'выберите вид работ') {
    let buttons = []
    instance().get(`/References/PropertyRequestKind/List?ParentId=${msg.data}`)
      .then(response => {
        buttons = response.data.result.map(el => ([{text: el.name, callback_data: el.id}]))
        creatorOptions(buttons, msg.message.chat.id, 'выберите категорию работ')
      });
  } else if (msg.message.text === 'выберите категорию работ') {
    let buttIsEmergency = [[{text: 'Да', callback_data: 'true'}], [{text: 'Нет', callback_data: 'false'}]]
    creatorOptions(buttIsEmergency, msg.message.chat.id, 'Заявка аварийная?')
  } else if (msg.message.text === 'Заявка аварийная?') {
    bot.sendMessage(msg.message.chat.id, 'Описание заявки')
  }
})


const propertyRoom = (propertyId, chatId) => {
  let roomsOptions = []
  properties?.forEach(el => {
    if (el.property.id === propertyId && el.propertyRoom) {
      roomsOptions.push([{text: el.propertyRoom.number, callback_data: el.propertyRoom.id}])
    }
  })
  creatorOptions(roomsOptions, chatId, 'выберите помещение')
}




