window.addEventListener('load', function(){

const pullDownButton = document.getElementById("lists")
const pullDownParents = document.getElementById("pull-down")

  pullDownButton.addEventListener('mouseover', function(){
    this.setAttribute("style", "background-color:#FFBEDA;")
  })

  pullDownButton.addEventListener('mouseout', function(){
    pullDownButton.removeAttribute("style")
  })

  pullDownButton.addEventListener('click', function() {
    // プルダウンメニューの表示と非表示の設定
    if (pullDownParents.getAttribute("style") == "display:block;") {
      // pullDownParentsのstyle属性にdisplay:block;が指定されている場合（つまり表示されている時）実行される
      pullDownParents.removeAttribute("style")
    } else {
      // pullDownParentsのstyle属性にdisplay:block;が指定されていない場合（つまり非表示の時）実行される
      pullDownParents.setAttribute("style", "display:block;")
    }
  })
})