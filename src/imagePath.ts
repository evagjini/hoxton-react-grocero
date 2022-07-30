import { StoreItemType } from "./App"

 function getItemImagePath(item:any){
    let id = String(item.id).padStart(3, '0')
    return `assets/icons/${id}-${item.name}.svg`
  
  
  
  }



  export default getItemImagePath