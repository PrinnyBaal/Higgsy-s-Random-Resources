
sheetProj.view.sheetLogic = {
  setupUserInterface: function () {

      tableRoll.launchTab();
    }
};

let tableRoll={
  rollOnTable:function(){
    let settings=data.tableRollSettings;
    settings.galleryImage=0;
    let selectedTables=[];
    let tablePool=data.getTablePool();

    settings.selectedTables.forEach((selection)=>{
      selectedTables.push(...tablePool[selection].cells);
    });

    let cell;
    cell=selectedTables[ci.dieRoll(selectedTables.length)-1];
    settings.currentCell=cell;
    tableRoll.displaySlot(cell);
    $("#galleryLeftBtn").prop("disabled", true);
    console.log(cell.imgGallery);
    if (cell.imgGallery.length<=1){
      $("#galleryRightBtn").prop("disabled", true);
    }else{
      $("#galleryRightBtn").prop("disabled", false);
    }
  },
  displaySlot:function(cell){
    let image;
    let settings=data.tableRollSettings;
    $("#textHeader").html(cell.title);
    $("#textBulk").html(cell.content);

    if (cell.imgGallery.length ){
      let image=cell.imgGallery[settings.galleryImage];
      if (image.imgURL.length){
        // $("#displayedImage").css("background-image", `url(${image.imgURL})`);
        $("#displayedImage").attr("src", `${image.imgURL}`);
        $("#imageCaption").html(image.caption);
      }else{
        $("#displayedImage").attr("src", `https://res.cloudinary.com/metaverse/image/upload/v1569528583/Avatars/Higgsy/higgsyErrMessages/NoImgFound.png`);
        $("#imageCaption").html(image.caption);
      }

    }else{
      $("#displayedImage").attr("src", `https://res.cloudinary.com/metaverse/image/upload/v1569528583/Avatars/Higgsy/higgsyErrMessages/NoImgFound.png`);
      $("#imageCaption").html("No Image");
    }
  },
  changeSelectedTable:function(selected){
    //https://stackoverflow.com/questions/30372235/html-select-multiple-get-all-values-at-onchange-event
    let opts = [];
    let settings=data.tableRollSettings;
    let opt;
    for (let i = 0, len=selected.options.length; i < len; i++) {
      opt = selected.options[i];
      if (opt.selected) {
        opts.push(opt.value);
      }
    }
    if (!opts.length){opts.push(0)};
    settings.selectedTables=opts;


  },
  launchTab:function(){
    let alterPoolSlot=``;
    let tableSelects=``;
    let tablePool=data.getTablePool();
    let settings=data.tableRollSettings;
    let swapOutSegment=`

      <div id="textContent">
        <div class="hoverFlow" id="textHeader"></div>
        <div class="hoverFlow" id="textBulk"></div>
      </div>
      <div id="imageContent">
        <img class="hoverFlow" id="displayedImage"/>
        <div class="hoverFlow" id="imageCaption"></div>
        <button disabled onclick="tableRoll.moveGallery(-1)" class="galleryBtn" id="galleryLeftBtn">&#9664;</button>
        <button disabled onclick="tableRoll.moveGallery(1)" class="galleryBtn" id="galleryRightBtn">&#9654;</button>
      </div>



      <div class="hoverFlow" id="rollAgainSlot"><button id="tableRollButton" class="iconedButton rollingButton" onclick="tableRoll.rollOnTable()">Roll!</button> <img onclick="tableRoll.rollOnTable()" src="https://img.icons8.com/ultraviolet/96/000000/dice.png" class="buttonIcon"/></div>
      <div class="hoverFlow" id="alterPoolSlot"></div>
    `;
    $("#swapOutSegment").html(swapOutSegment);


    tablePool.forEach((table, index)=>{
      tableSelects+=`<option ${settings.selectedTables.includes(index.toString())? "selected":""} value=${index}>${table.title}</option>`;
    });
    alterPoolSlot+=`
    <button style="width:100%; min-height:1em;" onclick="tableRoll.toggleImages()">Toggle Images</button>
    <span>Select One Or More Tables To Roll On:</span>
    <select onchange="tableRoll.changeSelectedTable(this)" name="tables" multiple>
    ${tableSelects}
    </select>`;

    $('#alterPoolSlot').html(alterPoolSlot);


  },
  toggleImages:function(){
    if ($("#imageContent").hasClass("hidden")){
      $("#imageContent").removeClass("hidden");
      $("#alterPoolSlot").removeClass("expanded");
    }else{
      $("#imageContent").addClass("hidden");
      $("#alterPoolSlot").addClass("expanded");
    }
  },
  moveGallery:function(movement){
    let settings=data.tableRollSettings;
    settings.galleryImage+=movement;
    tableRoll.displaySlot(settings.currentCell);
    if (settings.galleryImage-1<0){
      $("#galleryLeftBtn").prop("disabled", true);
    }else{
      $("#galleryLeftBtn").prop("disabled", false);
    }
    if(settings.galleryImage+1==settings.currentCell.imgGallery.length){
      $("#galleryRightBtn").prop("disabled", true);
    }else{
      $("#galleryRightBtn").prop("disabled", false);
    }


  }
}

let tableEdit={
  launchTab:function(){
    let settings=data.tableEditSettings;
    let tablePool=data.getTablePool();
    let activeTable=tablePool[settings.selectedTable];
    let activeCell=activeTable.cells[settings.selectedCell];

    let swapOutSegment=`
    <div id="editTableTitleRow">
    <input type="text" id="editTableTitle" value="${activeTable.title}" onchange="tableEdit.editTableTitle(event.target.value)"/>
    <div id="editTableSelect" class="hoverFlow"></div>
    </div>
    <div id="editContentColumn">
      <input type="text" id="editCellTitle" value="${activeCell.title}" onchange="tableEdit.editTitle(event.target.value)"/>
      <textarea id="editTableDescription" onchange="tableEdit.editDescription(event.target.value)">${activeCell.content}</textarea>
      <div id="editImgGallery" class="hoverFlow">


      </div>
    </div>
    <div id="editSelectColumn">
      <div id="editCellSelect" class="hoverFlow"></div>

    </div>`;
  $("#swapOutSegment").html(swapOutSegment);
  tableEdit.setSelectCollumn();
  tableEdit.setImgGallery();
  // <div id="editTableTags" class="hoverFlow">
  //   Add/Remove table tags (comma seperated):
  //   <textarea onchange="tableEdit.editTableTags(event.target.value)" id="tableTags">${activeTable.tags}</textarea>
  // </div>

  },
  setImgGallery:function(){
    let settings=data.tableEditSettings;
    let tablePool=data.getTablePool();
    let activeTable=tablePool[settings.selectedTable];
    let activeCell=activeTable.cells[settings.selectedCell];
    let imgSlots="";

    activeCell.imgGallery.forEach((img, index)=>{
      imgSlots+=`
      <div class="imgSlot">
        <img src="${img.imgURL}" class="imgPreview"/>
        URL:<input value="${img.imgURL}" type="text" class="imgURLSlot" onchange="tableEdit.changeImgURL(event.target.value,${index})"/>
        Caption:<input type="text" value="${img.caption}" class="imgCaptionSlot" onchange="tableEdit.changeImgCaption(event.target.value,${index})"/>
        <button onclick='tableEdit.deleteImage(${index})' class="imgCloseButton"/>
      </div>`;
    });
    imgSlots+="<button onclick='tableEdit.addImage()'>Add Gallery Image</button>";
    $("#editImgGallery").html(imgSlots);
  },
  setSelectCollumn:function(){
    let settings=data.tableEditSettings;
    let tablePool=data.getTablePool();
    let activeTable=tablePool[settings.selectedTable];
    let activeCell=activeTable.cells[settings.selectedCell];
    let alterPoolSlot=``;
    let tableSelects=``;
    let cellSelects=``;
    let cellSlot="";
    tablePool.forEach((table, index)=>{
      tableSelects+=`<option ${index==settings.selectedTable? "selected":""} value=${index}>${table.title}</option>`;
    });
    tableSelects+='<option  value="ADDNEWTABLE">ADD NEW TABLE</option>';

    activeTable.cells.forEach((cell, index)=>{
      cellSelects+=`<option ${index==settings.selectedCell? "selected":""} value=${index}>${cell.title}</option>`;
    });
    cellSelects+='<option  value="ADDNEWCELL">ADD NEW CELL</option>';

    alterPoolSlot+=`
    Select A Table To Look Through:
      <select onchange="tableEdit.changeSelectedTable(event.target.value)" name="tablesEditVer">
        ${tableSelects}
      </select>
    <hr>


    `;
    cellSlot+=`Then Select A Table Cell To Edit:
    <select onchange="tableEdit.changeSelectedCell(event.target.value)" name="tableCells">
      ${cellSelects}
    </select>
    <hr>
    <button onclick="tableEdit.deleteSelectedCell()" style="background-color:brown" >DELETE Selected <b>Cell</b></button>
    <hr>
    <button onclick="tableEdit.deleteSelectedTable()" style="background-color:red">DELETE Selected <b>Table</b></button>
    <hr>
    <hr>
    <button onclick="tableEdit.downloadCSV()" style="background-color:cyan" >DOWNLOAD Selected Table (As CSV)</button>
    <hr>
    UPLOAD Table(s) (CSV): <input  multiple onchange="tableEdit.importByCSV(this.files)" type="file" id="uploadTable" name="uploadTable" accept="text/csv">
    <hr>`;

    $('#editTableSelect').html(alterPoolSlot);
    $('#editCellSelect').html(cellSlot);
  },
  changeSelectedTable:function(tableIndex){
    if (tableIndex=="ADDNEWTABLE"){
      tableEdit.addTable();
      return;
    }
    let settings=data.tableEditSettings;
    settings.selectedCell=0;
    settings.selectedTable=tableIndex;
    tableEdit.launchTab();
  },
  changeSelectedCell:function(cellIndex){
    if (cellIndex=="ADDNEWCELL"){
      tableEdit.addCell();
      return;
    }
    let settings=data.tableEditSettings;
    settings.selectedCell=cellIndex;
    tableEdit.launchTab();

  },
  editTitle:function(newTitle){
    let settings=data.tableEditSettings;
    let tablePool=data.getTablePool();
    let activeTable=tablePool[settings.selectedTable];
    let activeCell=activeTable.cells[settings.selectedCell];
    activeCell.title=newTitle;
    data.setTablePool(tablePool);
    tableEdit.setSelectCollumn();

  },
  editDescription:function(newDescription){
    let settings=data.tableEditSettings;
    let tablePool=data.getTablePool();
    let activeTable=tablePool[settings.selectedTable];
    let activeCell=activeTable.cells[settings.selectedCell];
    activeCell.content=newDescription;
    data.setTablePool(tablePool);
  },
  editTableTitle:function(newTitle){
    let settings=data.tableEditSettings;
    let tablePool=data.getTablePool();
    let activeTable=tablePool[settings.selectedTable];
    activeTable.title=newTitle;
    data.setTablePool(tablePool);
    tableEdit.setSelectCollumn();
  },
  addImage:function(){
    let settings=data.tableEditSettings;
    let tablePool=data.getTablePool();
    let activeTable=tablePool[settings.selectedTable];
    let activeCell=activeTable.cells[settings.selectedCell];
    activeCell.imgGallery.push(new Construct.GalleryImage());
    data.setTablePool(tablePool);
    tableEdit.setImgGallery();
  },
  deleteImage:function(index){
    let settings=data.tableEditSettings;
    let tablePool=data.getTablePool();
    let activeTable=tablePool[settings.selectedTable];
    let activeCell=activeTable.cells[settings.selectedCell];
    activeCell.imgGallery.splice(index, 1);
    data.setTablePool(tablePool);
    tableEdit.setImgGallery();
  },
  changeImgURL:function(newURL, index){
    let settings=data.tableEditSettings;
    let tablePool=data.getTablePool();
    let activeTable=tablePool[settings.selectedTable];
    let activeCell=activeTable.cells[settings.selectedCell];
    activeCell.imgGallery[index].imgURL=newURL;
    data.setTablePool(tablePool);
    tableEdit.setImgGallery();
  },
  changeImgCaption:function(newCap, index){
    let settings=data.tableEditSettings;
    let tablePool=data.getTablePool();
    let activeTable=tablePool[settings.selectedTable];
    let activeCell=activeTable.cells[settings.selectedCell];
    activeCell.imgGallery[index].caption=newCap;
    data.setTablePool(tablePool);
  },
  deleteSelectedTable:function(){
    //remember to use windows confirm to avoid an accidental misclick deleting a ton of work
    let settings=data.tableEditSettings;
    let tablePool=data.getTablePool();

    if (tablePool.length<=1){
      alert("You can't delete your only table!  If you don't want this one anymore, make another first by opening table select and picking the last option 'ADD NEW TABLE'.");
      return;
    }


    if(window.confirm("Are you sure you want to delete this table?  You won't be able to get it back!")){
      tablePool.splice(settings.selectedTable, 1);
      data.setTablePool(tablePool);
      tableEdit.changeSelectedTable(0);

    }else{
      return;
    }


  },
  addTable:function(){
    let settings=data.tableEditSettings;
    let tablePool=data.getTablePool();
    tablePool.push({title:"Untitled Table", cells:[new Construct.TableCell("Untitled Cell", "Description Intentionally Left Blank")]});
    data.setTablePool(tablePool);

    // settings.selectedTable=;
    // settings.selectedCell=0;
    tableEdit.changeSelectedTable(tablePool.length-1);
    // tableEdit.setSelectCollumn();
  },
  addCell:function(){
    let settings=data.tableEditSettings;
    let tablePool=data.getTablePool();
    let activeTable=tablePool[settings.selectedTable];
    activeTable.cells.push(new Construct.TableCell("Untitled Cell", "Description Intentionally Left Blank"));
    data.setTablePool(tablePool);
    tableEdit.changeSelectedCell(activeTable.cells.length-1);
  },
  deleteSelectedCell:function(){
    //windws confirm less important here but still important enough and it's better to be consistent
    let settings=data.tableEditSettings;
    let tablePool=data.getTablePool();
    let activeTable=tablePool[settings.selectedTable];
    let activeCells=activeTable.cells;

    if (activeCells.length<=1){
      alert("You can't delete your table only cell!  If you don't want this one anymore, make another first by selecting the final cell option marked 'ADD NEW CELL'");
      return;
    }


    if(window.confirm("Are you sure you want to delete this cell?  You won't be able to get it back!")){
      activeCells.splice(settings.selectedCell, 1);
      data.setTablePool(tablePool);
      tableEdit.changeSelectedCell(0);

    }else{
      return;
    }

  },
  editTableTags:function(newTags){
    let settings=data.tableEditSettings;
    let tablePool=data.getTablePool();
    let activeTable=tablePool[settings.selectedTable];
    let polishedTags=[];

    newTags=newTags.split(",");
    newTags=newTags.map((tag)=>{
      return tag.trim();
    });
    newTags.filter((tag)=>{
      if (tag.length){
        return true;
      }
    });
    activeTable.tags=newTags;
    console.log(newTags);
    data.setTablePool(tablePool);
  },
  downloadCSV:function(){


    let table=data.getTablePool()[data.tableEditSettings.selectedTable];
    let csv=`"${table.title.toUpperCase()}","Content","Img urls", "Img Captions"\n`;

    table.cells.forEach((cell, index)=>{
      let imgPack=[];
      let imgCaps=[];
      cell.imgGallery.forEach((image)=>{
        imgPack.push(image.imgURL);
        imgCaps.push(image.caption);
      });
      imgPack=imgPack.join("%IMAGE%");
      imgCaps=imgCaps.join("%CAPTION%");
      csv+=`"${cell.title}","${cell.content}","${imgPack}","${imgCaps}"\n`;

    });
    data.downloadFile(`${table.title}.csv`, csv, "csv");
  },
  importByCSV:function(filesGiven){
    // let catalogueType=$('input[name=catalogueType]:checked').val();

    // let fileGet=$('#catAddByFile').val();
    // var reader = new FileReader();



    // getDataUrl(fileGet).then(
    //     data => testURL(data)
    //   );
    for (let i=0, len=filesGiven.length; i<len; i++){
      console.log(`File ${i}`);

      let reader = new FileReader();
      console.log("wtf?!");
      reader.onload = function(e) {
    // The file's text will be printed here
          uploadToPool(e.target.result.split(/(?:")\n(?=")/g));
        };

        reader.readAsText(filesGiven[i]);


    }

    function uploadToPool(newTable){

      let tableStats={
        title:"None",
        cells:[],
      };
      newTable.forEach((line, index)=>{
        let lineSplit=line.split(/(?:"),(?=")/g);
        lineSplit.forEach((line, index)=>{
          lineSplit[index]=line.substr(1, line.length-2);
        });
        let imageGallery=[];
        let imgSplit, capSplit;
        if (index===0){
          tableStats.title=lineSplit[0];
        }else{
          imgSplit=lineSplit[2].split(/%IMAGE%/g);
          capSplit=lineSplit[3].split(/%CAPTION%/g);
          imgSplit.forEach((url, i)=>{
            imageGallery.push({imgURL:url, caption:capSplit[i]});

          });
          tableStats.cells.push(new Construct.TableCell(lineSplit[0],lineSplit[1], imageGallery));
        }

      });


      let tablePool=data.getTablePool();
      tablePool.push(tableStats);
      data.setTablePool(tablePool);
      data.tableEditSettings.selectedTable=tablePool.length-1;
      tableEdit.launchTab();


    }














  }
}

let magicScroll={
  launchTab:function(){
    let settings=data.tableEditSettings;
    let tablePool=data.getTablePool();
    let activeTable=tablePool[settings.selectedTable];
    let activeCell=activeTable.cells[settings.selectedCell];
    let referenceSlots="";

    let magicWords=data.getMagicWords();
    let magicKeys=Object.keys(magicWords);

    magicKeys.forEach((key)=>{
      let word=magicWords[key];
      referenceSlots+=`<div class="magicScrollReferenceSlot">
      <div ondblclick="copyToClipboard(event.target)" title="Double-Click to Copy" class="magicScrollReferenceWord hoverFlow">[${key}]</div>
      <div class="magicScrollReferenceBlurb hoverFlow">${word.blurb}</div>
      </div>`;
    });
    let swapOutSegment=`
    <textarea id="magicScrollContent">
      This is a magic scroll!  You can use it to randomize anything that requires results from multiple tables, whether it be something small like an Elven name generator with different tables for the first, second and third syllable or something more complex like an NPC description generated from various tables of traits.

      Any text that you don't want to be randomized, just write normally.  Then whenever you come to a section that you want randomized just put the name of the table (called 'magic words' in some descriptions since they 'magically' reshape themselves into one of many forms) in brackets like this: [example].    Note that the text can't have any trailing whitespace (spaces either before the first word or after the last word) and must be entirely in lowercase.  Other than that, Magic words can be whole phrases, contain numbers, etc.  Whatever works for you!  Then look below and click the ROLL button to see your result.  Note that if there IS no table with the word(s) you put in brackets it'll just remove the brackets.  If you use a magic word multiple times in the same template, each magical word will have its own random transformation.

      There's a reference table of Magic Words you currently have saved on the bottom righthand side.  You can also save any text you write in here as Templates so you can have one for magic words, elven names, loot descriptions, etc. all ready to go at a moment's notice.  Current templates are shown on the upper righthand side.  To save your current text to any template click the green Save button next the that template's name and to load the template's text into this box click the golden load button.  To delete it click the red button so, uh, careful with that.  In any case, why don't you try loading a few templates and giving them some test rolls?

      Oh, also after clicking the roll button to go back to seeing/editing the text underneath hover over the text and click the X button that should show up on the top right.
    </textarea>
    <div id="magicScrollDecoded" class="closableDiv  invisible hoverFlow"><button onclick="magicScroll.closeTranslation()" class="closeButton"></button></div>
    <div id="magicScrollTools">
      <div id="magicScrollTemplates" class="hoverFlow">


      </div>
      <div id="magicScrollReference" class="hoverFlow">
        <div id="magicScrollReferenceBanner">References:</div>
        <div id="magicScrollLabels"><div id="inputLabel">Input</div><div id="blurbLabel">Description</div></div>

        ${referenceSlots}
      </div>
    </div>
    <div id="magicScrollButtonRow">
      <div id="magicScrollRollBox">
        <div id="decodeScrollSlot">
          <button id="decodeScrollButton" class="iconedButton rollingButton" onclick="magicScroll.translateMagic()">Decode Scroll</button>
          <img onclick="magicScroll.translateMagic()" src="https://img.icons8.com/doodle/96/000000/scroll.png" class="buttonIcon"/>
        </div>


      </div>
      <!-- <div id="magicScrollStorageBox">
        <button>Save Current Template</button><input type="text" id="magicScrollTitle"/>
      </div> -->
    </div>`;
  $("#swapOutSegment").html(swapOutSegment);
  // tableEdit.setSelectCollumn();
  // tableEdit.setImgGallery();
  magicScroll.setTemplates();

  },
  setTemplates:function(){
    let templates=data.getTemplates();
    let templateHTML=`<div id="magicScrollTemplatesBanner">Templates:</div>`;

    templates.forEach((template, index)=>{
      templateHTML+=`<div class="magicScrollTemplateSlot">
        <input onchange="magicScroll.changeTemplateTitle(${index}, event.target.value)" value="${template.title}" type="text" class="magicScrollTemplateTitle"/>
        <button title="Load From" onclick="magicScroll.loadFromTemplate(${index})" class="loadFromTemplateButton"></button>
        <button title="Save To" onclick="magicScroll.saveToTemplate(${index})" class="saveToTemplateButton"></button>
        <button title="Delete Template" onclick="magicScroll.deleteTemplate(${index})" class="deleteTemplateButton"></button>


      </div>`;

      if ((index+1)%5==0){
        templateHTML+='<div class="magicScrollTemplateDivider"></div>';
      }
    })

    templateHTML+=`<button onclick="magicScroll.addTemplate()">Create New Template</button>`;


    $("#magicScrollTemplates").html(templateHTML);
  },
  loadFromTemplate:function(index){
    let templates=data.getTemplates();
    $("#magicScrollContent").val(templates[index].text);
  },
  deleteTemplate:function(index){
    let templates=data.getTemplates();
    templates.splice(index, 1);
    data.setTemplates(templates);
    magicScroll.setTemplates();
  },
  saveToTemplate:function(index){
    let templates=data.getTemplates();
    let newText=$("#magicScrollContent").val();
    templates[index].text=newText;
    data.setTemplates(templates);
  },
  changeTemplateTitle:function(index, newTitle){
    let templates=data.getTemplates();
    templates[index].title=newTitle;
    data.setTemplates(templates);
  },
  addTemplate:function(){
    let templates=data.getTemplates();
    templates.push(new Construct.Template());
    data.setTemplates(templates);
    magicScroll.setTemplates();
  },
  translateMagic:function(){
    let magicText=$("#magicScrollContent").val();
    console.log(magicText);
    let magicRegex=/\[[^\[]+\]/gi;
    let magicWords=data.getMagicWords();
    let decodedText=magicText.replace(magicRegex, decode);
    decodedText+='<button onclick="magicScroll.closeTranslation()" class="closeButton"></button>';

    $("#magicScrollDecoded").removeClass("invisible");
    $("#magicScrollDecoded").html(decodedText);

    function decode(match){
      let unwrapRgx=/\[|\]/gi;
      let meanings;
      match=match.replace(unwrapRgx, "");

      if (magicWords[match.toLowerCase()]){
        meanings=magicWords[match.toLowerCase()].meanings;
        return `<b>${meanings[ci.dieRoll(meanings.length)-1]}</b>`;
        //do the thing to roll and find the meaning
      }else{
        return match;
      }
    }
  },
  closeTranslation:function(){
    $("#magicScrollDecoded").addClass("invisible");


  }

}

let magicWord={
  launchTab:function(){
    let settings=data.magicWordSettings;
    let magicWords=data.getMagicWords();

    let magicKeys=Object.keys(magicWords);
    if (settings.selectedWord==0){
      settings.selectedWord=magicKeys[0];
    }
    let chosenWord=magicWords[settings.selectedWord];
    let chosenMeaning=chosenWord.meanings[settings.selectedMeaning]
    //change selected word to a key name

    let swapOutSegment=`<div id="magicWordSelectRow">
      <input type="text" onchange="magicWord.changeTitle(event.target.value)" value="${chosenWord.word}" id="magicWordTitleInput"/>
      <div id="magicWordSelectWordSection" >

      </div>

    </div>

    <div id="magicWordMeaningSection" class="hoverFlow">
      Edit Cell/Meaning:
      <textarea onchange="magicWord.changeMeaning(event.target.value)" id="magicWordMeaningInput">${chosenMeaning}</textarea>
      <hr>

    </div>

    <div id="magicWordMeaningSelectionSection" class="hoverFlow">

    </div>`;

    $("#swapOutSegment").html(swapOutSegment);
    magicWord.setWordSelection();
    magicWord.setMeaningSelection();
  },
  setWordSelection:function(){
    let settings=data.magicWordSettings;
    let magicWords=data.getMagicWords();
    let magicKeys=Object.keys(magicWords);
    let options=``;
    let html;

    magicKeys.forEach((key)=>{
      options+=`<option ${key==settings.selectedWord ? "selected":""} value='${key}'>${key}</option>`;
    });
    options+=`<option value="ADDNEWWORD">ADD NEW WORD!!!</option>`;


    html=`Select A New Word:
    <select id="magicWordSelect" onchange="magicWord.selectNewWord(event.target.value)">
      ${options}
    </select>
    <hr>
    <button style="background-color:brown;" onclick="magicWord.removeWord()">Delete Current Table</button>`;

    $("#magicWordSelectWordSection").html(html);
  },
  setMeaningSelection:function(){
    let settings=data.magicWordSettings;
    let magicWords=data.getMagicWords();
    let chosenWord=magicWords[settings.selectedWord];

    let options=``;
    let html;

    chosenWord.meanings.forEach((meaning, index)=>{
      //if meaning isn't automatically cut toa reasonable size we'll do so here
      options+=`<option ${index==settings.selectedMeaning ? "selected":""} value=${index}>${meaning}</option>`;
    });
    options+="<option  value='ADDNEWMEANING'>ADD NEW MEANING!!!</option>"


    html=`Select A Meaning To Edit:
    <select onchange="magicWord.selectNewMeaning(event.target.value)" id="magicWordMeaningSelect" multiple=1>
      ${options}
    </select>
    <button style="background-color:brown;" onclick="magicWord.removeSelectedMeaning()">Delete Selected Meaning</button>
    <hr>

    Give This Word a Description:
    <textarea id="magicWordBlurbInput" onchange="magicWord.changeBlurb(event.target.value)">${chosenWord.blurb}</textarea>`;

    $("#magicWordMeaningSelectionSection").html(html);
  },
  changeTitle:function(newTitle){

    newTitle=newTitle.toLowerCase();
    newTitle=newTitle.trim();
    let settings=data.magicWordSettings;

    let magicWords=data.getMagicWords();
    let word= magicWords[settings.selectedWord];
    let magicKeys=Object.keys(magicWords);
    let oldTitle=word.word;



    if(magicKeys.includes(newTitle)){
      alert("Hold on, another Table/Magic Word already has this name!  Remember capitalization is ignored when differentiating but if you want you could add a number to your title to make it unique.");
    }
    else{
      settings.selectedWord=newTitle;
      word.word=newTitle;
      magicWords[`${newTitle}`]={};
      Object.assign(magicWords[newTitle], magicWords[oldTitle]);

      delete magicWords[oldTitle];
      data.setMagicWords(magicWords);
      magicWord.setWordSelection();
    }



  },
  changeMeaning:function(newMeaning){

    let settings=data.magicWordSettings;
    let magicWords=data.getMagicWords();
    let word= magicWords[settings.selectedWord];
    word.meanings[settings.selectedMeaning]=newMeaning;
    data.setMagicWords(magicWords);
    magicWord.setMeaningSelection();
  },
  changeBlurb:function(newBlurb){
    let settings=data.magicWordSettings;
    let magicWords=data.getMagicWords();
    let word= magicWords[settings.selectedWord];
    word.blurb=newBlurb;
    data.setMagicWords(magicWords);

  },
  addMeaning:function(){
    let settings=data.magicWordSettings;
    let magicWords=data.getMagicWords();
    let word= magicWords[settings.selectedWord];
    word.meanings.push("UNDEFINED MEANING");
    data.setMagicWords(magicWords);
    settings.selectedMeaning=word.meanings.length-1;
    magicWord.launchTab();
    // magicWord.setMeaningSelection();
  },
  addWord:function(){
    let settings=data.magicWordSettings;
    let magicWords=data.getMagicWords();
    let magicKeys= Object.keys(magicWords);
    let copyCounter=1;
    if (magicKeys.includes("untitled")){
      while (true){
        if (magicKeys.includes(`untitled${copyCounter}`)){
          copyCounter++;
        }else{
          magicWords[`untitled${copyCounter}`]=new Construct.MagicWord(`untitled${copyCounter}`);
          settings.selectedWord=`untitled${copyCounter}`;
          break;
        }


      }
    }else{
      magicWords.untitled=new Construct.MagicWord("untitled");
      settings.selectedWord=`untitled`;
    }

    data.setMagicWords(magicWords);

  },
  removeWord:function(){
    let settings=data.magicWordSettings;
    let magicWords=data.getMagicWords();
    let magicKeys=Object.keys(magicWords);

    if (magicKeys.length==1){
      alert("You can't delete your only Table/Magic Word!");
    }else if(window.confirm(`Are you sure you want to delete the Magic Word ${settings.selectedWord}?`)){
      delete magicWords[settings.selectedWord];
      magicKeys=Object.keys(magicWords);
      settings.selectedWord=magicKeys[0];
      settings.selectedMeaning=0;
      data.setMagicWords(magicWords);
      magicWord.launchTab();
    }
  },
  removeSelectedMeaning:function(){
    let settings=data.magicWordSettings;
    let magicWords=data.getMagicWords();
    let word= magicWords[settings.selectedWord];
    if (word.meanings.length==1){
      alert("Wait!  You can't delete the only meaning this word has!");
      return;
    }
    else{
      word.meanings.splice(settings.selectedMeaning, 1);
      settings.selectedMeaning=0;
      data.setMagicWords(magicWords);
      magicWord.launchTab();
    }

  },

  selectNewMeaning:function(chosenMeaning){
    let settings=data.magicWordSettings;
    if (chosenMeaning=="ADDNEWMEANING"){
      magicWord.addMeaning();
    }else{
      settings.selectedMeaning=chosenMeaning;
      magicWord.launchTab();
    }


  },
  selectNewWord:function(chosenWord){

    let settings=data.magicWordSettings;
    if (chosenWord=="ADDNEWWORD"){
      magicWord.addWord();
    }

    else{
      settings.selectedWord=chosenWord;
    }


    magicWord.launchTab();
  }

}

let importTable={
  launchTab:function(){

    let html=`<div id="importTypeSelect">
      Are you creating a Table or a Magic Word:<br>
      <input  style="margin-left:10%;" type="radio" id="table" name="tableType" value="table"
         checked>
      <label for="table">Table</label>

      <input  type="radio" id="word" name="tableType" value="word"
        >
      <label for="word">Word</label>
    </div>

    <hr>

    <div id="importSpace">
      Table Title/Magic Word:<br>
      <input style="margin-left:10%;" id="importTableTitle" type="text" />
      <hr>
      Seperate Entries By:<br>
      <input style="margin-left:10%;" onclick="" type="radio" id="numberSeperate" name="dividerType" value="number"
         checked>
      <label title="/\d+/g" for="numberSeperate">Number </label>
      <input onclick="" type="radio" id="numberSeperate" name="dividerType" value="newLine"
         checked>
      <label title="/\n+/g" for="numberSeperate">New Line </label>

      <input onclick="" type="radio" id="customSeperate" name="dividerType" value="custom">
      <label for="customSeperate">CUSTOM:</label><input type="text" id="customRegex"/>
      <hr>
      Copy and paste text to import:<br>
      <textarea id="importedText"></textarea>
      <br><br>
      (Optional) Set Comma Seperated Table Tags/Set Magic Word Description:<br>
      <textarea id="importedTags"></textarea>
      <br><br>
      <button style="margin-left:10%;" onclick="importTable.importText()">Import!</button>
      <hr>
      <hr>
      Download Backup data as JSON: <button onclick="importTable.getSaveFile()">DOWNLOAD</button>
      <hr>
      Replace site-data with a Save File:<input onchange="importTable.loadSaveFile(this.files[0])" type="file" id="uploadSave" name="uploadSave" accept="application/json">
    </div>`;
    $("#swapOutSegment").html(html);
  },
  importText:function(){
    let title=$("#importTableTitle").val();
    let tableType=$('input[name="tableType"]:checked').val();
    let dividerType=$('input[name="dividerType"]:checked').val();
    let rawImport=$("#importedText").val().trim();
    let rawTags=$("#importedTags").val().trim();
    let polishedImport=[];
    let polishedTags=[];
    let numericalRegex=/\d+/g;
    let newLineRegex=/\n+/g;
    let customRegex=new RegExp($("#customRegex").val(),"g");
    let tablePool=data.getTablePool();
    let magicWords=data.getMagicWords();
    let magicKeys=Object.keys(magicWords);
    let copyCounter=1;

    let newTable;


    switch(dividerType){
      case "number":
        polishedImport=rawImport.split(numericalRegex);
        break;

      case "custom":
        polishedImport=rawImport.split(customRegex);
        break;

      case "newLine":
        polishedImport=rawImport.split(newLineRegex);
        break;
      default:
        break;
    }


    if (!rawImport){
      fyiUser("You uh...may want to actually paste something into the text import area");
      return;
    }

    if (tableType=="table"){
      newTable={title:title? title:"untitledImport", cells:[]};
      polishedImport.forEach((imported, index)=>{
        if (imported){
          newTable.cells.push(new Construct.TableCell(index, imported.trim()));
        }

      });
      tablePool.push(newTable);
      data.setTablePool(tablePool);
      fyiUser("Import complete!  Double check in Edit Table Tab!")

    }else if(tableType=="word"){
      title=title.toLowerCase();
      if (magicKeys.includes(title)){
        while (true){
          if (!magicKeys.includes(`title${copyCounter}`)){
            title=`title${copyCounter}`;
            break;
          }
          copyCounter++;
        }
      }
      newTable=new Construct.MagicWord(title, [], rawTags);
      polishedImport.forEach((imported, index)=>{
        if (imported){
          newTable.meanings.push(imported.trim());
        }

      });
      magicWords[title]=newTable;
      data.setMagicWords(magicWords);
      fyiUser("Import complete!  Double check in Magic Word Tab!")
    }

  },
  getSaveFile:function(){
    let saveFile={
      tablePool:data.getTablePool(),
      templates:data.getTemplates(),
      magicWords:data.getMagicWords(),
    };
    data.downloadCleanFile("HT_SaveFile", JSON.stringify(saveFile), "application/json");
  },
  loadSaveFile:function(file){
    if (window.confirm("Are you sure you'd like to overwrite your data with this whatever's in this save file?")){
      let reader = new FileReader();
      reader.onload = function(e) {
    // The file's text will be printed here
          let saveFile=JSON.parse(e.target.result);
          console.log(saveFile);
          if (saveFile.magicWords){
            data.setMagicWords(saveFile.magicWords);
          }else{
            alert("Huh...we weren't able to read the Magic Words on this save file. Scroll down and shoot Steven an e-mail if you think this is a problem on our end.");
          }
          if (saveFile.tablePool){
            data.setTablePool(saveFile.tablePool);
          }else{
            alert("Huh...we weren't able to read the Table Pool on this save file. Scroll down and shoot Steven an e-mail if you think this is a problem on our end.");
          }
          if (saveFile.templates){
            data.setTemplates(saveFile.templates);
          }else{
            alert("Huh...we weren't able to read the Templates on this save file.  Scroll down and shoot Steven an e-mail if you think this is a problem on our end.");
          }



        };

      reader.readAsText(file);
    }
  }
}

function setSunkenEffect(target){
  console.log(target);
  $(".sunkenButton").removeClass("sunkenButton");
  $(target).addClass("sunkenButton");
}

function copyToClipboard(copyText){
  /* Get the text field */


 /* Select the text field */

 let range = document.createRange();
 let selection=window.getSelection();
 range.selectNode(copyText);
 selection.removeAllRanges();
 selection.addRange(range);
 document.execCommand("copy");



 /* Alert the copied text */
 fyiUser("Magic Word copied to clipboard");
}

function fyiUser(text){
  $("#alertBanner").removeClass("activeAlert");
  $("#alertBanner").html(text);
  $("#alertBanner").addClass("activeAlert");
  setTimeout(removeBanner, 5000)

  function removeBanner(){
    $("#alertBanner").removeClass("activeAlert");
  }
}

function logData(){

  console.log(JSON.stringify(data.getMagicWords()));
  console.log(JSON.stringify(data.getTablePool()));
  console.log(JSON.stringify(data.getTemplates()));
}
