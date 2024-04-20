// 行列のtex記法に変換
scrapbox.PopupMenu.addButton({
    title: "Matrix",
    onClick: text => {
        const ret = "[$ \\begin{pmatrix}"
        + text.split(",").map(row => row.trim().split(" ").join("&")).join("\\\\")
        + "\\end{pmatrix}]";
        return ret;
    }
});

console.log(matrix("1 2, 3 4"))
