if(typeof jQuery!=="function")
  throw new Error("myquery依赖于jquery，必须先引入jquery.js");
else{
  jQuery.fn.sum=function(){
    //this->$("ul>li")
    var sum=0;
    this.each((i,li)=>{
      sum+=parseInt($(li).html())
    })
    return sum;
  }
  //$("ul>li").sum();
}