import ImageColors from "react-native-image-colors"


export const getImageColors=async(uri:string)=>{
    const colors=await ImageColors.getColors(uri, {})

    let primary;
    let secondary;
    
    if(colors.platform === "android"){
        primary = colors.dominant;
        secondary =colors.average;
       // const avorageColor=colors.average;
        
    }else{
        primary = colors.primary;
        secondary =colors.secondary;
    // const backGroundColor=colors.background;
    }
  return [primary,secondary]
  }
  