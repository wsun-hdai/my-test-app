import { binding, given, when, then } from "cucumber-tsflow";
import expect from 'expect';
import {Rocket} from '../rocket';
 
@binding()
class SpaceX {
    rocket: Rocket | undefined;     
    @given(/I am Elon Musk attempting to launch a rocket into space/)
    public setup_rocket(): void{
      this.rocket = new Rocket();
    }
    
    @when(/I launch the rocket/)
    public launch_rocket(): void{
        if(this.rocket===undefined)
        {
            throw Error('rocket was not built');
        }
        this.rocket.launch();
    }
    
    @then(/the rocket should end up in space/)
    public check_rocket_space(): void {
        if(this.rocket===undefined)
        {
            throw Error('rocket was not built');
        }
        expect(this.rocket.isInSpace).toBe(true);
    }
    
    @then(/the booster\(s\) should land back on the launch pad/)
    public check_rocket_alignment(): void{
        if(this.rocket===undefined)
        {
            throw Error('rocket was not built');
        }
        expect(this.rocket.boostersLanded).toBe(true);
    }
    
    @then(/nobody should doubt me ever again/)
    public doubt(): void{
      expect('people').not.toBe('haters');
    }
    
}
export = SpaceX;