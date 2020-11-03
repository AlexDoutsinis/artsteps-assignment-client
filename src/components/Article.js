import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

function Article({ article }) {
  return (
    <>
      <GridStyled item xs={8} md={9}>
        <Typography variant="h6">
          <TextStyled>{article.title}</TextStyled>
        </Typography>

        <DescStyled>{article.description}</DescStyled>
      </GridStyled>

      <GridStyled item xs={4} md={3}>
        <Grid container direction="column" spacing={1} alignItems="flex-end">
          <Grid item xs={12}>
            {new Date(article.createdAt).toDateString()}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h7" color="primary">
              {article.category}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextStyled>Edit</TextStyled>
          </Grid>
          <Grid item xs={12}>
            <TextStyled>Delete</TextStyled>
          </Grid>
        </Grid>
      </GridStyled>
    </>
  )
}

export default Article

// Styles
const GridStyled = styled(Grid)`
  ${props =>
    props.btop
      ? `border-top: solid white 1px; margin-top: 10px;`
      : `border-bottom: solid white 1px;`};
`

const TextStyled = styled.span`
  &:hover {
    cursor: pointer;
  }
`

const DescStyled = styled.p`
  margin-top: 8px;
`
