export default class LoggerService {
    log(module:string, msg: string):void{
        console.error(`[${module}]: ${msg}`);
    }
}
