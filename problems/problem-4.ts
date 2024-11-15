// Problem 4
type Circle = {
    shape: string,
    radius: number
}

type Rectangle = {
    shape: string,
    width: number,
    height: number,
}
const calculateShapeArea = (paras: Circle | Rectangle) : number|undefined => {
    if("radius" in paras){
        const result: number =Math.PI * paras.radius * paras.radius
        return parseFloat(result.toFixed(2))
    }else if("height" in paras && "width" in paras){
        return paras.height * paras.width;
    }else{
        return undefined
    }
}