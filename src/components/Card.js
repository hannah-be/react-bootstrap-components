import React from 'react'

export function Card({
  children
}) {
  return (
    <div className="card" style={{width: '15rem'}}>
    {children}
    </div>
  )
}

export function CardTitle({
  children
}) {
  return (
    <h4 className="card-title">
    {children}
    </h4>
  )
}

export function CardText({
  children
}) {
  return (
    <p className="card-text">
    {children}
    </p>
  )
}

export function CardBody({
  children
}) {
  return (
    <div className="card-body">
    {children}
    </div>
  )
}

export function CardImage({
  src,
  alt
}) {
  return (
    <img className="card-img-top" src={src} alt={alt} />
  )
}
