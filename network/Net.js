import Def from '../val/Def';

export default class Net{

  static Login(callback,errCallback,usernameStr,passwordStr) {
    
    postParams =  "username="+usernameStr+"&password="+passwordStr;
    Net.sendRequest(callback,errCallback,Def.LOGIN_URL ,Def.POST_METHOD,postParams);
  }
  
  //REQUEST=====================================

  // jsonData là string json đã được stringify
  static sendRequest(callback,errCallback,url,method,jsonData = null)
  {
    console.log("SENDING: " + jsonData);
    console.log("TO: "+ url);
    console.log("METHOD: "+ method);

    if(url ==Def.LOGIN_URL)
    {
      fetch(url, {
        method: method,
        body: jsonData,
        headers: new Headers({
                   'Content-Type': 'application/x-www-form-urlencoded',
          })
      })
      .then(response => response.text())
      .then(text => {
        try {
            let data = JSON.parse(text);
            callback(data)
        } catch(err) {
          errCallback(err + ': ' + url);
        }
      })
      .catch((error) => { errCallback(error);}) ;
    }
    else if(method == Def.GET_METHOD)
    {
        fetch(url, {
          method: method,
          headers: {
            Authorization: Def.Authorization,
          }
        })
        .then(response => response.text())
        .then(text => {
          try {
              let data = JSON.parse(text);
              callback(data)
          } catch(err) {
            errCallback(err + ': ' + url);
          }
        })
        .catch((error) => { errCallback(error);}) ;
    }
    else if(method == Def.POST_METHOD || (method == Def.PATCH_METHOD) )
    {
      fetch(url, {
        method: method,
        body: jsonData,
        headers: {
          Authorization: Def.Authorization,
          'Content-Type': 'application/json',
        }
      })
      .then(response => response.text())
      .then(text => {
        try {
            let data = JSON.parse(text);
            callback(data)
        } catch(err) {
          errCallback(err + ': ' + url);
        }
      })
      .catch((error) => { errCallback(error);}) ;
    }
  }

}

