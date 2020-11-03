import React from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

function Article({ article }) {
  return (
    <>
      <GridStyled item xs={8} md={9}>
        <Typography variant="h6">
          <TextStyled>
            <Link to={`/articles/${article.slug}`}>{article.title}</Link>
          </TextStyled>
        </Typography>

        <DescStyled>{article.description}</DescStyled>
      </GridStyled>

      <GridStyled item xs={4} md={3}>
        <Grid container direction="column" spacing={1} alignItems="flex-end">
          <Grid item xs={12}>
            {new Date(article.createdAt).toDateString()}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="primary">
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

  a {
    color: inherit;
  }
`

const DescStyled = styled.p`
  margin-top: 8px;
`
