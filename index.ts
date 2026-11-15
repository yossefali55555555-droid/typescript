

//1 
class user {
  protected id :number
  name :string
  email:string
  private password !: string
  phone : string
  age !:number
  Note:notebook[]
  set setpassword (password:string){
    this.password= password
  }
  get getpassword (){
    return this.password
  }
  displayinfo(){
    console.log(this.id + " " +this.name +" " +this.email +" " + this.phone +" " + this.age )
  }
  constructor(id:number,name:string,email:string,phone:string,age:number,notebook:notebook[]){
    this.id = id
    this.email=email
    this.phone=phone 
    if(age<18||age>60){
        throw new Error("the age is invalid should be from 18 to 60")
    }   
    else{
      this.age= age
    }
    this.name =name
    this.Note=notebook
  }
}



//2
class Admin extends user{
  managenotes(notebook:notebook,note:note){
    notebook.addnote(note)
  }
}



//3
class note {
  id:number
  title:string
  content:string
  userid:user
  author:user
  preview():string{
   return this.content.substring(0,20)
  }
  constructor(id:number,title:string,content:string,userid:user,author:user){
    this.id=id
    this.title=title
    this.content=content
    this.userid=userid
    this.author=author
  }
}

//4
class notebook {
  Note :note[] =[]
  addnote(note:note){
    this.Note.push(note)
  }
  removenote(note:note){
    let index= this.Note.indexOf(note)
    if(index!==-1){
    this.Note.splice(index,1)
    }
  }
}

//7

class storage <T> {
  item:T[]=[]
    additem(item:T){
    this.item.push(item)
  }
  removeitem(item:T){
    let index= this.item.indexOf(item)
    if(index!==-1){
    this.item.splice(index,1)
    }
  }
  get getallitems():T[]{
    return this.item
  }
}