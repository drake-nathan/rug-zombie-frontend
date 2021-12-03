import React, { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { LinkExternal } from '@rug-zombie-libs/uikit'
import { bnbPriceUsd, burnGraveById, nftById } from '../../../../redux/get'
import { useDrBurnenstein } from '../../../../hooks/useContract'
import { getFullDisplayBalance } from '../../../../utils/formatBalance'

export interface DetailsPanelProps {
  id: number
}

const DetailsPanel:React.FC<DetailsPanelProps> = ({ id }) => {
  const [unlockFee, setUnlockFee] = useState(0)

  const grave = burnGraveById(id)
  const nft = nftById(grave.nftid)

  const drburn = useDrBurnenstein()

  useEffect(() => {
    drburn.methods.priceInBnb(grave.poolInfo.unlockFee).call()
      .then((res) => {
        setUnlockFee(parseFloat(getFullDisplayBalance(new BigNumber(res), 18, 4)))
      })
  })

  return (
    <div className="rug-indetails">
      <div className="direction-column imageColumn">
        <div className="sc-iwajpm dcRUtg">
          {nft.type === 'image'
            ? <img src={nft.path} alt="NFT" className="sc-cxNHIi bjMxQn" />
            : <video width="100%" autoPlay loop>
              <source src={nft.path} type="video/mp4"/>
            </video>}
        </div>
      </div>
      <div className="direction-column">
        <span className="indetails-type">{nft.description}</span>
        <span className="indetails-title">
                    <LinkExternal bold={false} small href={nft.artist.twitter ? nft.artist.twitter : nft.artist.instagram}>
                        View NFT Artist
                    </LinkExternal>
                </span>
      </div>
      <div className="direction-column">
        <span className="indetails-type">Unlock Fees: {unlockFee} BNB ({(unlockFee * bnbPriceUsd()).toFixed(2)} in USD)</span>
        <span className="indetails-title">NFT Minting Time:<span className="indetails-value">{grave.mintingTime}</span></span>
        <span className="indetails-title">Minimum Stake:<span className="indetails-value">{getFullDisplayBalance(grave.poolInfo.minimumStake)} {grave.stakingToken.symbol}</span></span>
        <span className="indetails-title">Burn Amount:<span className="indetails-value">{getFullDisplayBalance(grave.poolInfo.tokensToBurn)} ZMBE</span></span>
        <span className="indetails-title">Timer Reduction By Burn:<span className="indetails-value">{grave.burnReduction}</span></span>
      </div>
    </div>
  )
}

export default DetailsPanel;