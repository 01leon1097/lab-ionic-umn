var num = []

// THE BRAIN OF THE APP

function init(){
  num = JSON.parse(localStorage.getItem("spend"))
  if(num==null) num=[];
  var price = 0
  document.getElementById('list').innerHTML=""
  for (i = 0; i < num.length; i++){
    price += Number.parseInt(num[i]['price'])
    var ionList = document.createElement("ion-item")
    var p = document.createElement("p")
    p.innerText = num[i]['name']+" : "+ChangeToRupiah(num[i]['price'])
    ionList.appendChild(p)
    document.getElementById('list').appendChild(ionList)
  }
  document.getElementById('price').innerText=ChangeToRupiah(price)
}

// CONVERTING TO RUPIAH (SEARCH FROM THE INTERNET)

function ChangeToRupiah (price){
  var rev = parseInt(price, 10).toString().split("").reverse().join("");
  var rev2 = "";
  for (var i=0; i<rev.length; i++){
    rev2 += rev[i];
    if((i + 1) % 3 === 0 && i !== (rev.length - 1)){
      rev2 += ".";
    }
  }
  return "Rp. " + rev2.split("").reverse().join("");
}

// CLEAR LOCALSTORAGE BYE

async function destroy(){
  const alertController = document.querySelector('ion-alert-controller');
  await alertController.componentOnReady();

  if(name.length == 0 || spend == null){
      const alert = await alertController.create({
          header: 'U sure?',
          message: 'Spending list will be destroyed now! Memories do not last forever!',
          buttons: [{ text: 'Wait, no',
                      handler: ()=>{}
                    },
                    { text: 'Yes, go',
                      handler: ()=>{
                        z=[]
                        localStorage.removeItem("spend")
                        init()
                      }
                    }]
      });
    return await alert.present();
  }

  z.push({
      'name': name,
      'amount': spend,
  })

  document.getElementById('name').value=""
  document.getElementById('spend').value=""

  init()
}

// ADDING NAME AND VALUE TO LOCALSTORAGE

async function add() {
  var name=document.getElementById('name').value
  var spend=document.getElementById('spend').value

  const alertController = document.querySelector('ion-alert-controller');
  await alertController.componentOnReady();

  if(name.length == 0 || spend == null){
      const alert = await alertController.create({
          header: 'Oopsy Whoopsie!',
          message: 'You cannot fill the name nor value in blank, we need your tears:)',
          buttons: ['Back']
      });
    return await alert.present();
  }

  num.push({
      'name': name,
      'price': spend,
  })

  document.getElementById('name').value=""
  document.getElementById('spend').value=""
  localStorage.setItem("spend", JSON.stringify(num))
  init()
}