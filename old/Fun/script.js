function ShowPopup(picture)
{
	var p = document.getElementById('popup');

	p.innerHTML = "<p>Click to close</p><a href='JavaScript:ClosePopup()'><img src="+picture+" /></a>";
	p.style.display = "block";

}

function ClosePopup()
{
	var p = document.getElementById('popup');
	p.style.display = "none";
}
