const { chromium } = require('playwright');

(async() =>{
   const browser = await chromium.launch();
   const page = await browser.newPage();

  // Navigate  to the example website
  await page.goto('https://example.cypress.io/commands/traversal');

  // Traverse using 'childern'
  const childrenCount = await page.$$eval('traversal-breadcrumb > ul > li', (items) => items.length);
  console.log('Number of childern:${childernCount}');

  // Traverse using 'closest'
  const closestElement = await page.$eval('.traversal-badge', (badge) =>{
   return badge.closest('.traversal-list').className;
  });
  console.log('Closest element class:${closestElement}');
 
  // Traverse using 'eq'
  const eqIndex = 2;
  const eqElementText = await page.$eval('.traversal-list >li',(element,index) =>{
   return element.innerText;
  },eqIndex);
  console.log('element at index ${eqIndex}: ${eqElementText}');

  // Traverse using 'filter'
  const filteredElement = await page.$$eval('.traversal-list> li', (elements) =>{
   return elements.filter((el) => el.innerText.includes('Item 1')).map((el)=> el.innerText);
  });
  console.log('filtered elements:${filteredElements.join(', ')}');

 // Traverse using 'find'
  const findElementText = await page.$eval('.traversal-list', (list)=>{
   const foundElement = list.querySelector('li');
   return foundElement.innerText;
 });
 console.log('found element text: ${findElementText}');

 // Traverse using 'first'
 const firstElementText = await page.$eval('.traversal-list>li:first-child', (element)=>{
  return element.innerText;
 });
 console.log('first element text:${firstElementText}');
 // Traverse usint'last'
 const lastElementText = await page.$eval('.traversal-list>li:last-child', (element)=>{
  return element.innerText;
 });
 console.log('last element text:${lastElementText}');
 // Traverse using 'next'
 const nextElementText = await page.$eval('.traversal-list>li:first-child', (element)=>{
  const nextElement = element.nextElementSibling;
  return nextElement.innerText;
 });
 console.log('Next element text:${nextElementText}');

 // Traverse using 'nextAll'
 const nextAllElementsText = await page.$$eval('.traversal-list>li:first-child', (element)=>{
  const nextAllElements = Array.from(elements[0].nextAll());
  return nextAllElements.map((el) =>el.innerText );
 });
 console.log('Next all element text:${nextAllElementsText.join(',')}');

 // Traverse using 'nextUntil'
 const nextUntilElementsText = await page.$$eval('.traversal-list>li:first-child', (element)=>{
  const nextUntilElements = Array.from(elements[0].nextUntil('li'));
   return nextUntilElements.map((el) =>el.innerText );
 });
 console.log('Next Until element text:${nextUntilElementsText.join(',')}');

// Traverse using 'not'
 const notElementsText = await page.$$eval('.traversal-list>li:not(.special)', (element)=>{
  return elements.map((el) =>el.innerText );
 });
 console.log('Not elements text:${notElementsText.join(',')}');

 await browser.close();

 })();