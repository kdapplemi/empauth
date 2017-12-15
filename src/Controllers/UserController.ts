import {JsonController, Get, Post, Param, Delete, Body, UseBefore} from "routing-controllers";
import {Service} from "typedi";
import {UserRepository} from "../Repository/UserRepository";
import {User} from "../Model/User";
import * as cors from "cors";

@Service()
@JsonController()
@UseBefore(cors())
export class UserController{

    constructor(private userRepository: UserRepository){
        userRepository = new UserRepository();
        this.userRepository = userRepository;
    }

    @Get("/user")
    all(): Promise<User[]> {     
           
        return this.userRepository.findAll();
    }

    @Get("/user/:id")
    one(@Param("id") id: number): User {
        console.log('id :'+ id);
        return this.userRepository.findOne(id);
    }
}