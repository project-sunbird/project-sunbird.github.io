---
type: landing
directory: features-documentation
title: Proof of Concept
page_title: Image POC
description: Image POC
keywords: Image POC
published: true
allowSearch: true
---
## Concept:1

1. The image contains steps/instruction along with the display. The image frame is taken in the ratio of 16:9 (an ideal size of the frame for rectangular images). 

2. Image Scale: 

- **Horizontal spread** 20% on the either side (left & right) of the image is left for writing/viewing instructions (Total measurment= 20%+20% - instructions and 60% image area)
- **Vertical spread** 15% on the either side (top & bottom) of the image is left for writing Title/Caption and Notes respectively

3. The image is saved in the .svg format and zoom feature is enabled

{% image src='pages/features-documentation/images/testimages/imagepocabc.svg' full center alt='Login' zoom %}

## Concept:2

[[img src=pages/features-documentation/images/logintest.png alt=login]]


## Concept: 3

<button class="accordion">Prerequisite</button>
<div class="panel">
  <p>
  <table>
  <tr>
    <th style="width:35%;">Step</th>
    <th style="width:65%;">Screen</th>
  </tr>
  <tr>
    <td>1. You are logged in as the administrator<br>2. You are currently on <b>Home</b> page. You want to view, review and analyze content creation or consumption patterns<br>3. You have clicked  <b>Admin Dashboard</b> from the profile drop down 
      </td>
      <td><img src="pages/features-documentation/images/admindashboard/prerequisites.png"></td>
  </tr>
</table>
</p>
</div>

<button class="accordion">Selecting Organization</button>
<div class="panel">
  <p>
    <table>
  <tr>
    <th style="width:35%;">Step</th>
    <th style="width:65%;">Screen</th>
  </tr>
  <tr>
    <td>1.Click <b>Select Organization</b> from the drop down, to select the organization for which you require the analytics</td>
     <td><img src="pages/features-documentation/images/admindashboard/selectorg.png"></td>
  </tr>
</table>
  </p>
  </div>
  
  ## Concept: 4
  
  <!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
.accordion {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
}

.active, .accordion:hover {
    background-color: #ccc; 
}

.panel {
    padding: 0 18px;
    display: none;
    background-color: white;
    overflow: hidden;
}
</style>
</head>
<body>

<h2>Accordion</h2>

<button class="accordion">Section 1</button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button class="accordion">Section 2</button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button class="accordion">Section 3</button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<script>
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
</script>

</body>
</html>





