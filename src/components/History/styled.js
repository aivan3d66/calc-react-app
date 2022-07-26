import styled from 'styled-components'

import theme from '@/theme'

export const HistoryContainer = styled.div`
  border-left: ${theme.spaces[2]}px solid ${theme.colors.lightGray};
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: ${theme.spaces[6]}px;
  scrollbar-color: ${theme.colors.darkGray};
  scrollbar-width: thin;
  width: ${theme.size.xs}px;

  &::-webkit-scrollbar {
    background: white;
  }

  &::-webkit-scrollbar-thumb {
    background-clip: content-box;
    background-color: ${theme.colors.darkGray};
    border: ${theme.spaces[3]}px solid transparent;
    border-radius: ${theme.spaces[5]}px;
  }
`

export const HistoryTitle = styled.h2`
  font-size: ${theme.textStyle.xl.fontSize}rem;
  font-weight: normal;
  line-height: ${theme.textStyle.xl.lineHeight}rem;
  text-align: center;
`

export const HistoryList = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: ${theme.textStyle.xl.fontSize}rem;
  height: ${theme.size.max}%;
  line-height: ${theme.textStyle.xl.lineHeight}rem;
  list-style: none;
  margin: 0;
  text-align: left;
`

export const HistoryListItem = styled.ul`
`
