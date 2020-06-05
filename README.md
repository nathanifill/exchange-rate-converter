# exchange-rate-converter
A simple JavaScript exchange rate converter with options to swap currencies

## Motivation

This was a quick test at my ability to use the Fetch API and manipulate JSON objects.

## Tech used
HTML, CSS and JavaScript. No frameworks were harmed in the making of this project.

This also uses the free Exchange Rate API. Although the free tier only allows you to use USD or EUR as your base currency, the code that I've written calculates "synthesised" rates by using the US dollar as a go between to ensure that there aren't any errors.

For example, if you wanted to convert from GBP to EUR, it first converts from USD to GBP,= and then from USD to EUR before finally dividing the latter by the former to get the GBP to EUR rate.

## Features
There is a swap button which allows you to swap the currencies around quickly if you want the inverse of the currency conversion. That means you can switch to calculating how many US dollars you'd get for one Euro and how many Euros you'd get for one US dollar quickly and easily.

## Credits
I got inspired to build this after seeing [Brad Traversy's Exchange Rate Converter from his Vanilla Web Projects](https://github.com/bradtraversy/vanillawebprojects/tree/master/exchange-rate), so I've been heavily influenced by that.

I looked at his code, recreated it exactly, wrote down the project specifications, and then created this mini web app from scratch based solely on those project specifications without looking at Brad's code. Any similarities are purely coincidental.

I've also been influenced by the UI used by [Transferwise](https://transferwise.com/) so you might see some similarities between my project and that too.

## License
This is under an MIT licence. You can do whatever you want wth the code as long as you include the original copyright and license notice in any copy of the software/source.

MIT © [Nathan Ifill](https://www.nathanifill.com)

