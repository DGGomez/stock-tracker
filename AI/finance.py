import datetime as dt
import matplotlib.pyplot as plt
from matplotlib import style
from matplotlib.finance import candlestick_ohlc
import matplotlib.dates as mdates
import pandas as pd
import pandas_datareader.data as web

style.use('ggplot')

start = dt.datetime(2000,1,1)
end = dt.datetime(2019,1,1)
df =  web.DataReader('ACB', 'yahoo', start, end)
df.to_csv('ACB.csv')
# df = pd.read_csv('ACB.csv', parse_dates=True, index_col=0)
# print(df.head())
df.plot()
# df['Adj Close'].plot()

#draw line
# ax2 = plt.subplot2grid((6,1), (5,0), rowspan=1, colspan=1)
# ax1 = plt.subplot2grid((6,1),(0,0), rowspan=5, colspan=1, sharex=ax2)
# ax1.plot(df.index, df['Adj Close'])
# ax1.plot(df.index, df['100ma'])

# add dates
#df_ohlc.reset_index(inplace=True)
# df_ohlc['Date'] = df_ohlc['Date'].map(mdates.date2num)
# ax1.xaxis_date()

# candlestick graph
# candlestick_ohlc(ax1, df_ohlc.values, width=2, colorup='g')
# ax2.fill_between(df_volume.index.map(mdates.date2num), df_volume.values, 0)

# split by 10 days
# df_ohlc = df['Adj Close'].resample('10D').ohlc()
# df _volume = df['Volume'].resample('10D').sum()
plt.show()
