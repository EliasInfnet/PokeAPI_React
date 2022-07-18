import { useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import { Color } from '@mui/material'

type PokemonInfo = {
  height: Number,
  experience: Number,
  weight: Number
}

export default function PokemonPieChart(pokemonInfo: PokemonInfo) {

  const info = [
    { symbol: "HGT", amount: Number(pokemonInfo.height), color: '#3f51b5' },
    { symbol: "EXP", amount: Number(pokemonInfo.experience), color: "#cfb72e" },
    { symbol: "WGT", amount: Number(pokemonInfo.weight), color: "#f16b61" },
  ];

  const width = 100;
  const half = width / 2;

  return (
    <main>
      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie
            data={info}
            pieValue={(data) => data.amount}
            outerRadius={half}
            innerRadius={half - 8}
            padAngle={0.01}
          >
            {(pie) => {
              return pie.arcs.map((arc) => {
                return (
                  <g
                    key={arc.data.symbol}
                  >
                    <path d={pie.path(arc) || ''} fill={arc.data.color}></path>
                  </g>
                );
              });
            }}
          </Pie>

          {/* {active ? (
            <>
              <Text textAnchor="middle" fill="#fff" fontSize={40} dy={-20}>
                {`$${Math.floor(active.amount * active.inUSD)}`}
              </Text>

              <Text
                textAnchor="middle"
                fill={active.color}
                fontSize={20}
                dy={20}
              >
                {`${active.amount} ${active.symbol}`}
              </Text>
            </>
          ) : (
            <>
              <Text textAnchor="middle" fill="#fff" fontSize={40} dy={-20}>
                {`$${Math.floor(
                  coins.reduce((acc, coin) => acc + coin.amount * coin.inUSD, 0)
                )}`}
              </Text>

              <Text textAnchor="middle" fill="#aaa" fontSize={20} dy={20}>
                {`${coins.length} Assets`}
              </Text>
            </>
          )} */}
        </Group>
      </svg>
    </main>
  );
}