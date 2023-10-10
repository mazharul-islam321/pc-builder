// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import ProductInfo from '@/files/product_info/csvjson.json'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {
    query: { category, status },
    method,
  } = req;
  let data: any = []
  if(category){
    data = ProductInfo.filter(product=> 
      product.category === category)
  }
  if(status){
    data = ProductInfo.filter(product=> product.status === status)
  }
  res.status(200).json(data)
}
