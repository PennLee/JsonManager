/**
 * Created by unico on 16/4/5.
 */
$(document).ready(function(){
    var myobj = null;
    var jsonText = null;
    var fileInput = $("#file")[0];
    read = function (){
        var file = fileInput.files[0]; //获取File引用
        var reader = new FileReader();

        //onload表示reader读取文件完毕事件，下面是发生这个事件执行的回调函数
        reader.onload = function(e){
            jsonText = this.result; //取得读取的文件内容
            myobj = JSON.parse(jsonText);  //把json文本转换为js对象

            //each遍历对象数组
            $.each(myobj.data.record,function(i,n){
                $('#table').append("<tr id="+i+"></tr>");
                $('#'+i).append("<td>"+ n.productCode+"</td>")
                    .append("<td width=80>"+ n.productName+"</td>")
                    .append("<td width=80>"+ n.brandName+"</td>")
                    .append("<td width=30>"+ n.brandCode+"</td>")
                    .append("<td width=80>"+ n.brandCnName+"</td>")
                    .append("<td width=30>"+ n.status+"</td>")
                    .append("<td width=100><table id=mt"+i+"></table></td>")
                    .append("<td width=100><table id=nt"+i+"></table></td>")
                    .append("<td><table id=ct"+i+"></table></td>")
                    .append("<td width=30>"+ n.marketPrice+"</td>")
                    .append("<td width=30>"+ n.salesPrice+"</td>")
                    .append("<td width=30>"+ n.stockNum+"</td>")
                    .append("<td width=30>"+ n.falseNum+"</td>")

                if(n.seriesList.length !== 0) {
                    for (j = 0; j < n.seriesList.length; j++) {
                        $('#mt' + i).append("<tr id=mtr" + i + j + "></tr>");
                        $('#mtr' + i + j).append("<td width=31>" +n.seriesList[j].colorID + "</td>")
                            .append("<td width=35>" + n.seriesList[j].colorCode + "</td>")
                            .append("<td width=38>" + n.seriesList[j].colorName + "</td>")
                    }
                }

                for (j = 0; j < n.colorList.length; j++) {
                    $('#nt' + i).append("<tr id=ntr" + i + j + "></tr>");
                    $('#ntr' + i + j)
                        .append("<td width=31>" +n.colorList[j].colorID + "</td>")
                        .append("<td width=35>" + n.colorList[j].colorCode + "</td>")
                        .append("<td width=38>" + n.colorList[j].colorName + "</td>")
                }

                for (j = 0; j < n.categoryList.length; j++) {
                    $('#ct' + i).append("<tr id=ctr" + i + j + "></tr>");
                    $('#ctr' + i + j)
                        .append("<td width=28>" +n.categoryList[j].cateId1 + "</td>")
                        .append("<td width=28>" + n.categoryList[j].cateId2 + "</td>")
                        .append("<td width=28>" + n.categoryList[j].cateId3 + "</td>")
                        .append("<td width=28>" + n.categoryList[j].cateId4 + "</td>")
                        .append("<td width=43>" + n.categoryList[j].cateName1 + "</td>")
                        .append("<td width=43>" + n.categoryList[j].cateName2 + "</td>")
                        .append("<td width=43>" + n.categoryList[j].cateName3 + "</td>")
                        .append("<td width=43>" + n.categoryList[j].cateName4 + "</td>")
                        .append("<td width=29>" + n.categoryList[j].level + "</td>")
                        .append("<td width=23>" + n.categoryList[j].img + "</td>")
                        .append("<td width=46>" + n.categoryList[j].lenovos + "</td>")
                        .append("<td width=22>" + n.categoryList[j].sort + "</td>")
                        .append("<td width=72>" + n.categoryList[j].updateTime + "</td>")
                }

                //$.each(n.seriesList,function(j,m){
                //    $('#t'+i).append("<tr id=tr"+j+"></tr>");
                //    $('#tr'+j).append("<td>"+m.colorID+"</td>").append("<td>"+m.colorCode+"</td>").append("<td>"+m.colorName+"</td>")
                //})
            })
        }
        reader.readAsText(file);
    }
})
