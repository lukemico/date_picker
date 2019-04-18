const tabs = document.getElementsByClassName('tab')
const tabsArray = Array.from(tabs)
const tabContents = document.getElementsByClassName('tabContent')
const tabContentsArray = Array.from(tabContents)

tabsArray.forEach(tab => {
  let id = tab.getAttribute('id')
  tab.addEventListener('click', () => showTab(id))
})

function showTab(tabId) {
  tabContentsArray.forEach(tabContent => {
    let tabContentId = tabContent.getAttribute('id')
    tabContent.style.display = 'none'
    if (tabContentId.includes(tabId)) tabContent.style.display = 'block'
  })
}
