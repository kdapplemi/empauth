import {Service} from "typedi";
import {User} from "../Model/User";

@Service()
export class UserRepository{

    private user =[        
        new User(1,"jackmanH","Hugh","Jackman","wolverine",true),
        new User(2,"sparrowJ","Jack","Sparroe","Captain",true)                   
];

findAll() {
    // here, for example you can load categories using mongoose
    // you can also return a promise here
    // simulate async with creating an empty promise        
    return Promise.resolve(this.user);     
}

findOne(id: number) {
    // here, for example you can load category id using mongoose
    // you can also return a promise here
    let foundCategory: User = undefined;
    let cId: number = 0;
    cId = id;
   // parseInt(id);
    this.user.forEach(category => {
       // console.log(typeof category.id);
        console.log(typeof (cId));
        if (category.id == cId )           
            foundCategory = category;
    });
    return foundCategory;
}

}