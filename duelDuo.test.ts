
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('able to draw the bots with the button and displays the choices', async () => {
    await driver.findElement(By.xpath('//button[text()="Draw"]')).click()
    await driver.findElement(By.xpath('//*[@id="choices"]'))
    const bot = await driver.findElement(By.xpath('//*[@id="choices"]'))
    const isDisplayed = await bot.isDisplayed()
    expect(isDisplayed).toBeTruthy()
    await driver.sleep(3000)
})
test('able to click add to duo and display the add duo div', async () => {
    await driver.findElement(By.xpath('//button[text()="Draw"]')).click()
    await driver.findElement(By.xpath('//*[@id="choices"]/div[1]/button')).click()
    await driver.findElement(By.xpath('//*[@id="choices"]/div[2]/button')).click()
    const botBtn = await driver.findElement(By.xpath('//*[@id="player-duo"]'))
    const isDisplayed = await botBtn.isDisplayed()
    expect(isDisplayed).toBeTruthy()
    await driver.sleep(3000)
})